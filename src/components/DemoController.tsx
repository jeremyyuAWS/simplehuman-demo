import * as React from 'react';
import { motion } from 'framer-motion';
import { BsRobot, BsX, BsChatLeftText, BsArrowReturnLeft, BsShieldCheck, BsRecycle, BsTools, BsQuestionCircle, BsCart, BsHouse, BsWrench } from 'react-icons/bs';
import { conversationStarters, conversationScenarios } from '../data/mockProducts';
import { enhancedDemoScenarios } from '../data/demoScenarios';
import { useConversationStore } from '../store/conversationStore';

interface DemoControllerProps {
  onClose: () => void;
}

type EnhancedScenarioId = keyof typeof enhancedDemoScenarios;

export const DemoController: React.FC<DemoControllerProps> = ({ onClose }) => {
  const { resetConversation, sendMessage } = useConversationStore();

  // Function to start a demo with a predefined conversation starter
  const startDemo = (starterIndex: number) => {
    const starter = conversationStarters[starterIndex];
    
    // Reset conversation first
    resetConversation();
    
    // Send the initial message after a brief delay
    setTimeout(() => {
      sendMessage(starter.initialMessage);
    }, 500);
    
    onClose();
  };

  // Function to start an enhanced demo scenario
  const startEnhancedDemo = (scenarioId: EnhancedScenarioId) => {
    const scenario = enhancedDemoScenarios[scenarioId];
    
    // Reset conversation first
    resetConversation();
    
    // Send the initial message after a brief delay
    setTimeout(() => {
      sendMessage(scenario.conversations[0].message);
    }, 500);
    
    onClose();
  };

  // Group conversation starters by category
  const categorizedStarters = [
    {
      category: 'Product Discovery',
      starters: [conversationStarters[0], conversationStarters[4]]
    },
    {
      category: 'Support & Troubleshooting',
      starters: [conversationStarters[1], conversationStarters[5]]
    },
    {
      category: 'Order Management',
      starters: [conversationStarters[2], conversationStarters[6]]
    },
    {
      category: 'Warranty & Registration',
      starters: [conversationStarters[3]]
    }
  ];

  // Enhanced demo scenarios
  const enhancedScenarios = [
    {
      id: 'multi-intent-shopping' as EnhancedScenarioId,
      title: 'Multi-Intent Shopping',
      description: 'Show how the AI handles multiple product inquiries',
      icon: <BsCart className="w-6 h-6" />
    },
    {
      id: 'complex-troubleshooting' as EnhancedScenarioId,
      title: 'Complex Troubleshooting',
      description: 'Demonstrate handling multiple product issues',
      icon: <BsWrench className="w-6 h-6" />
    },
    {
      id: 'personalized-recommendations' as EnhancedScenarioId,
      title: 'Personalized Recommendations',
      description: 'Show lifestyle-based product suggestions',
      icon: <BsHouse className="w-6 h-6" />
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Demo Scenarios</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <BsX className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Enhanced Demo Scenarios */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Enhanced AI Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {enhancedScenarios.map((scenario) => (
              <motion.button
                key={scenario.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => startEnhancedDemo(scenario.id)}
                className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {scenario.icon}
                  <div>
                    <h4 className="font-medium">{scenario.title}</h4>
                    <p className="text-sm text-gray-600">{scenario.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Original Conversation Starters */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Start Conversations</h3>
          {categorizedStarters.map((category) => (
            <div key={category.category} className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">{category.category}</h4>
              <div className="space-y-2">
                {category.starters.map((starter, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => startDemo(index)}
                    className="w-full p-3 text-left border rounded-lg hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <BsChatLeftText className="w-5 h-5" />
                      <span>{starter.initialMessage}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};