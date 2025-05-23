import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Message, ConversationContext } from '../types';
import { intentRouter } from '../utils/intentRouter';
import { useAnalyticsStore } from './analyticsStore';
import { conversationStarters, conversationScenarios } from '../data/mockProducts';

// Helper to create a delay for simulating typing
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface ConversationState {
  messages: Message[];
  isTyping: boolean;
  conversationId: string;
  context: ConversationContext;
  sendMessage: (content: string) => void;
  addMessage: (message: Message) => void;
  resetConversation: () => void;
  updateContext: (context: Partial<ConversationContext>) => void;
  sessions: {
    id: string;
    startTime: Date;
    endTime?: Date;
    messageCount: number;
    intents: string[];
  }[];
  currentSessionId: string | null;
  startNewSession: () => void;
  endCurrentSession: () => void;
  startDemoScenario: (scenarioId: string) => void;
}

// Initial context state
const initialContext: ConversationContext = {
  userIntents: [],
  productInterests: [],
  roomTypes: [],
  features: [],
  issues: [],
  previousQuestions: [],
  conversationStage: 'initial',
  lastMessageTime: new Date()
};

const generateSessionId = () => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const useConversationStore = create<ConversationState>()(
  persist(
    (set, get) => ({
      messages: [],
      isTyping: false,
      conversationId: `chat-${Date.now()}`,
      context: initialContext,
      sessions: [],
      currentSessionId: null,
      
      sendMessage: async (content: string) => {
        // Add user message immediately
        const userMessage: Message = {
          sender: 'user',
          content,
          timestamp: new Date(),
          type: 'text'
        };
        
        // Update context with the new message
        const updatedContext = {
          ...get().context,
          previousQuestions: [...get().context.previousQuestions, content],
          lastMessageTime: new Date()
        };
        
        // Start a new session if needed
        if (!get().currentSessionId) {
          get().startNewSession();
        }
        
        // Update session stats
        const sessions = [...get().sessions];
        const currentSessionIndex = sessions.findIndex(session => session.id === get().currentSessionId);
        if (currentSessionIndex >= 0) {
          sessions[currentSessionIndex] = {
            ...sessions[currentSessionIndex],
            messageCount: sessions[currentSessionIndex].messageCount + 1,
          };
        }
        
        set(state => ({
          messages: [...state.messages, userMessage],
          isTyping: true,
          context: updatedContext,
          sessions,
        }));
        
        // Track analytics
        useAnalyticsStore.getState().updateAnalyticsFromMessage(userMessage, updatedContext);
        
        // Process intent and generate a response with variable delay based on message length
        const typingDelay = Math.min(700 + content.length * 10, 2000); // Between 700ms and 2000ms
        await delay(typingDelay);
        
        try {
          // Use the intent router to determine response
          const response = await intentRouter(content, updatedContext);
          
          // Update the context with any new information from the intent
          if (response.contextUpdates) {
            set(state => ({
              context: {
                ...state.context,
                ...response.contextUpdates,
                lastMessageTime: new Date()
              }
            }));
            
            // Update analytics
            if (response.contextUpdates.userIntents) {
              // Track intents in the current session
              const updatedSessions = [...get().sessions];
              const sessionIndex = updatedSessions.findIndex(session => session.id === get().currentSessionId);
              if (sessionIndex >= 0 && response.contextUpdates.userIntents) {
                updatedSessions[sessionIndex] = {
                  ...updatedSessions[sessionIndex],
                  intents: Array.from(new Set([
                    ...updatedSessions[sessionIndex].intents,
                    ...response.contextUpdates.userIntents
                  ]))
                };
                
                set({ sessions: updatedSessions });
              }
            }
          }
          
          // Update session stats
          const updatedSessions = [...get().sessions];
          const sessionIndex = updatedSessions.findIndex(session => session.id === get().currentSessionId);
          if (sessionIndex >= 0) {
            updatedSessions[sessionIndex] = {
              ...updatedSessions[sessionIndex],
              messageCount: updatedSessions[sessionIndex].messageCount + 1,
              endTime: new Date(),
            };
            
            set({ sessions: updatedSessions });
          }
          
          // Add bot response
          set(state => ({
            messages: [...state.messages, response.message],
            isTyping: false
          }));
          
          // Track analytics
          useAnalyticsStore.getState().updateAnalyticsFromMessage(response.message, get().context);
          
        } catch (error) {
          // Handle any errors in the intent router
          console.error('Error processing message:', error);
          
          // Add fallback response
          const fallbackMessage: Message = {
            sender: 'bot',
            content: "I'm sorry, I encountered an issue processing your request. How else can I help you?",
            timestamp: new Date(),
            type: 'text'
          };
          
          set(state => ({
            messages: [...state.messages, fallbackMessage],
            isTyping: false
          }));
          
          // Track analytics
          useAnalyticsStore.getState().updateAnalyticsFromMessage(fallbackMessage, get().context);
        }
      },
      
      addMessage: (message: Message) => {
        // Start a new session if needed
        if (!get().currentSessionId) {
          get().startNewSession();
        }
        
        set(state => ({
          messages: [...state.messages, message],
          context: {
            ...state.context,
            lastMessageTime: new Date()
          }
        }));
        
        // Track analytics
        useAnalyticsStore.getState().updateAnalyticsFromMessage(message, get().context);
      },
      
      resetConversation: () => {
        // End current session if exists
        if (get().currentSessionId) {
          get().endCurrentSession();
        }
        
        set({
          messages: [],
          conversationId: `chat-${Date.now()}`,
          context: {
            ...initialContext,
            lastMessageTime: new Date()
          },
          currentSessionId: null,
        });
        
        // Initialize with welcome message
        setTimeout(() => {
          const welcomeMessage: Message = {
            sender: 'bot',
            content: 'Hello! I\'m the Simplehuman Smart Assistant. What brings you here today? Looking for a trash can, soap dispenser, mirror, or something else?',
            timestamp: new Date(),
            type: 'text'
          };
          get().addMessage(welcomeMessage);
        }, 500);
      },
      
      updateContext: (contextUpdates) => {
        set(state => ({
          context: {
            ...state.context,
            ...contextUpdates,
            lastMessageTime: new Date()
          }
        }));
      },
      
      startNewSession: () => {
        const newSessionId = generateSessionId();
        const sessions = [...get().sessions];
        
        sessions.push({
          id: newSessionId,
          startTime: new Date(),
          messageCount: 0,
          intents: [],
        });
        
        set({
          currentSessionId: newSessionId,
          sessions,
        });
        
        // Update analytics
        const { analyticsData } = useAnalyticsStore.getState();
        useAnalyticsStore.setState({
          analyticsData: {
            ...analyticsData,
            totalSessions: analyticsData.totalSessions + 1,
          }
        });
      },
      
      endCurrentSession: () => {
        const { currentSessionId, sessions } = get();
        
        if (currentSessionId) {
          const updatedSessions = sessions.map(session => 
            session.id === currentSessionId
              ? { ...session, endTime: new Date() }
              : session
          );
          
          set({
            currentSessionId: null,
            sessions: updatedSessions,
          });
        }
      },

      startDemoScenario: async (scenarioId) => {
        // Get scenario data
        const scenario = conversationScenarios[scenarioId as keyof typeof conversationScenarios];
        if (!scenario) return;
        
        // Reset conversation first
        get().resetConversation();
        
        // Wait for welcome message
        await delay(1000);
        
        // Clear the welcome message
        set({ messages: [] });
        
        // Start adding messages with delays
        const playScenario = async () => {
          for (let i = 0; i < scenario.conversations.length; i++) {
            const msg = scenario.conversations[i];
            
            // Add message
            const message: Message = {
              sender: msg.sender,
              content: msg.message,
              timestamp: new Date(),
              type: 'text',
              image: msg.image
            };
            
            set(state => ({
              messages: [...state.messages, message]
            }));
            
            // Delay between messages
            await delay(i === 0 ? 300 : 1500);
          }
        };
        
        playScenario();
      }
    }),
    {
      name: 'simplehuman-conversation-storage',
    }
  )
);

// Initialize conversation with welcome message
export const initializeConversation = async () => {
  const { messages, addMessage, resetConversation } = useConversationStore.getState();
  
  // If conversation exists, don't add welcome message
  if (messages.length > 0) return;
  
  // Reset and initialize
  resetConversation();
};