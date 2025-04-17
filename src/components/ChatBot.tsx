import React, { useState, useRef, useEffect } from 'react';
import { MessageList } from './MessageList';
import { UserInput } from './UserInput';
import { useConversationStore, initializeConversation } from '../store/conversationStore';
import { LoginPrompt } from './LoginPrompt';
import { useAuthStore } from '../store/authStore';
import { BsArrowsFullscreen, BsFullscreenExit, BsArrowDown } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatBot: React.FC = () => {
  const { messages, sendMessage, isTyping } = useConversationStore();
  const { isAuthenticated } = useAuthStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize conversation with welcome message
    initializeConversation();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Check if any of the messages suggest we need authentication
    const authRequiredMessages = messages.filter(
      message => message.requiresAuth && message.sender === 'bot'
    );
    
    if (authRequiredMessages.length > 0 && !isAuthenticated) {
      setShowLoginPrompt(true);
    }
  }, [messages, isAuthenticated]);

  useEffect(() => {
    // Set up scroll event listener to show/hide scroll button
    const messagesContainer = messagesContainerRef.current;
    if (messagesContainer) {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = messagesContainer;
        const isScrolledUp = scrollHeight - scrollTop - clientHeight > 50;
        setShowScrollButton(isScrolledUp);
      };
      
      messagesContainer.addEventListener('scroll', handleScroll);
      return () => messagesContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (content: string) => {
    if (content.trim()) {
      sendMessage(content);
    }
  };

  const handleCloseLoginPrompt = () => {
    setShowLoginPrompt(false);
  };

  return (
    <div className="flex flex-col h-full transition-all duration-300">
      {/* Messages area */}
      <div 
        ref={messagesContainerRef}
        className="flex-grow overflow-auto px-4 py-3 relative"
      >
        <MessageList messages={messages} isTyping={isTyping} />
        <div ref={messagesEndRef} />
        
        {/* Scroll to bottom button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              className="absolute bottom-4 right-4 bg-gray-900 text-white rounded-full p-2 shadow-lg"
              onClick={scrollToBottom}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsArrowDown className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      
      {/* Input area */}
      <div className="border-t border-gray-200 p-3">
        <UserInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
      
      {/* Login Prompt Modal */}
      <AnimatePresence>
        {showLoginPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoginPrompt onClose={handleCloseLoginPrompt} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};