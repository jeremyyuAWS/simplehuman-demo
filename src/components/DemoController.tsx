import * as React from 'react';
import { motion } from 'framer-motion';
import { BsRobot, BsX, BsChatLeftText, BsArrowReturnLeft, BsShieldCheck, BsRecycle, BsTools, BsQuestionCircle, BsCart, BsHouse, BsWrench } from 'react-icons/bs';
import { conversationStarters, conversationScenarios } from '../data/mockProducts';
import { demoScenarios } from '../data/scenarios';
import { useConversationStore } from '../store/conversationStore';
import { Scenario } from '../types';

interface DemoControllerProps {
  onClose: () => void;
}

type EnhancedScenarioId = keyof typeof demoScenarios;

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
    const scenario = demoScenarios[scenarioId] as Scenario;
    
    // Reset conversation first
    resetConversation();
    
    // Send the initial message after a brief delay
    setTimeout(() => {
      sendMessage(scenario.conversations[0].messages[0].content);
    }, 500);
    
    onClose();
  };

  // Group conversation starters by category
  const categorizedStarters = [
    {
      category: 'Product Discovery',
      starters: [
        { icon: <BsHouse />, text: 'Kitchen Products', onClick: () => startEnhancedDemo('kitchen-product-discovery') },
        { icon: <BsTools />, text: 'Product Comparison', onClick: () => startEnhancedDemo('product-comparison') }
      ]
    },
    {
      category: 'Support',
      starters: [
        { icon: <BsWrench />, text: 'Troubleshooting', onClick: () => startEnhancedDemo('complex-troubleshooting') },
        { icon: <BsShieldCheck />, text: 'Warranty', onClick: () => startEnhancedDemo('warranty-registration') }
      ]
    },
    {
      category: 'Account',
      starters: [
        { icon: <BsCart />, text: 'Order Management', onClick: () => startEnhancedDemo('order-management') },
        { icon: <BsRecycle />, text: 'Returns', onClick: () => startEnhancedDemo('returns-support') }
      ]
    }
  ];

  return (
    <div className="demo-controller">
      <div className="demo-header">
        <h2>Start a Demo</h2>
        <button onClick={onClose} className="close-button">
          <BsX />
        </button>
      </div>
      
      <div className="demo-categories">
        {categorizedStarters.map((category, index) => (
          <div key={index} className="demo-category">
            <h3>{category.category}</h3>
            <div className="demo-starters">
              {category.starters.map((starter, idx) => (
                <motion.button
                  key={idx}
                  className="demo-starter"
                  onClick={starter.onClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {starter.icon}
                  <span>{starter.text}</span>
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};