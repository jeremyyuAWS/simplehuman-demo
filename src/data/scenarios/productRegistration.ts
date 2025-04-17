import { Scenario, Conversation, Message } from '../../types';
import { products } from '../products';
import { greetings, formatting, commonResponses, productDetails } from '../templates';

export const productRegistration: Scenario = {
  id: 'product-registration',
  name: 'Product Registration and Accessories',
  description: 'Handling product registration and accessory recommendations',
  metadata: {
    difficulty: 'beginner',
    estimatedDuration: 15,
    tags: ['registration', 'accessories', 'product setup']
  },
  conversations: [
    {
      id: 'initial-registration',
      name: 'Product Registration Process',
      description: 'Customer wants to register their new product',
      messages: [
        {
          role: 'user',
          content: "I just got my new sensor can. How do I register it?",
          metadata: {
            intent: 'product-registration',
            sentiment: 'neutral'
          }
        },
        {
          role: 'assistant',
          content: "Congratulations on your new purchase! I'll help you register your product. You can register in two ways:\n\n" + formatting.numberedList([
            "Online at simplehuman.com/register",
            "Through our mobile app"
          ]) + "\n\nWould you like me to guide you through the online registration process?",
          metadata: {
            intent: 'registration-guidance',
            sentiment: 'positive'
          }
        },
        {
          role: 'user',
          content: "Yes, please. What information do I need?",
          metadata: {
            intent: 'information-gathering',
            sentiment: 'interested'
          }
        },
        {
          role: 'assistant',
          content: "You'll need:\n\n" + formatting.bulletList([
            "Product serial number (found on the bottom of your can)",
            "Purchase date",
            "Receipt or proof of purchase",
            "Your contact information"
          ]) + "\n\nWould you like me to help you locate the serial number?",
          metadata: {
            intent: 'information',
            sentiment: 'helpful'
          }
        }
      ]
    },
    {
      id: 'accessory-recommendations',
      name: 'Accessory Recommendations',
      description: 'Customer asks about compatible accessories',
      messages: [
        {
          role: 'user',
          content: "What accessories do you recommend for my sensor can?",
          metadata: {
            intent: 'accessory-inquiry',
            sentiment: 'interested'
          }
        },
        {
          role: 'assistant',
          content: "Here are some great accessories for your sensor can:\n\n" + formatting.bulletList([
            "Liner subscription service - Never run out of liners",
            "Replacement sensor module - For optimal performance",
            "Custom-fit liners - Perfect fit every time",
            "Battery subscription - Automatic battery delivery"
          ]) + "\n\nWould you like to know more about any of these?",
          metadata: {
            intent: 'recommendation',
            sentiment: 'positive'
          }
        },
        {
          role: 'user',
          content: "Tell me more about the liner subscription",
          metadata: {
            intent: 'subscription-inquiry',
            sentiment: 'interested'
          }
        },
        {
          role: 'assistant',
          content: "Our liner subscription service offers:\n\n" + formatting.bulletList([
            "Automatic delivery every 3 months",
            "10% discount on all liners",
            "Flexible delivery schedule",
            "Easy cancellation anytime",
            "Free shipping on all orders"
          ]) + "\n\nWould you like to sign up for the subscription?",
          metadata: {
            intent: 'sales',
            sentiment: 'positive'
          }
        }
      ]
    },
    {
      id: 'bundle-customization',
      name: 'Bundle Customization',
      description: 'Customer wants to customize their product bundle',
      messages: [
        {
          role: 'user',
          content: "Can I customize what comes in my subscription?",
          metadata: {
            intent: 'customization',
            sentiment: 'interested'
          }
        },
        {
          role: 'assistant',
          content: "Absolutely! You can customize your subscription bundle with:\n\n" + formatting.bulletList([
            "Different liner quantities",
            "Combination of liner types",
            "Battery delivery schedule",
            "Additional accessories"
          ]) + "\n\nWhat would you like to include in your bundle?",
          metadata: {
            intent: 'customization-options',
            sentiment: 'positive'
          }
        },
        {
          role: 'user',
          content: "I want liners and batteries, but not every 3 months",
          metadata: {
            intent: 'schedule-customization',
            sentiment: 'neutral'
          }
        },
        {
          role: 'assistant',
          content: "You can set your own delivery schedule:\n\n" + formatting.bulletList([
            "Choose delivery frequency (1-6 months)",
            "Mix and match products",
            "Adjust quantities anytime",
            "Skip deliveries when needed"
          ]) + "\n\nWould you like me to help you set up a custom schedule?",
          metadata: {
            intent: 'schedule-setup',
            sentiment: 'helpful'
          }
        }
      ]
    }
  ]
}; 