import { Scenario, Conversation, Message } from '../../types';
import { products } from '../products';
import { greetings, formatting, commonResponses, productDetails } from '../templates';

export const warrantyRegistration: Scenario = {
  id: 'warranty-registration',
  name: 'Warranty Registration and Claims',
  description: 'Handling warranty registration, claims, and related inquiries',
  metadata: {
    difficulty: 'intermediate',
    estimatedDuration: 20,
    tags: ['warranty', 'registration', 'claims', 'support']
  },
  conversations: [
    {
      id: 'initial-warranty-inquiry',
      name: 'Initial Warranty Inquiry',
      description: 'Customer asks about warranty coverage',
      messages: [
        {
          role: 'user',
          content: "I just bought a sensor can. How do I register for warranty?",
          metadata: {
            intent: 'warranty-registration',
            sentiment: 'neutral'
          }
        },
        {
          role: 'assistant',
          content: greetings.warrantyInquiry + "\n\nI'd be happy to help you register your warranty. Could you please provide:\n\n1. The product's serial number\n2. Your purchase date\n3. Where you purchased it from",
          metadata: {
            intent: 'information-gathering',
            sentiment: 'positive'
          }
        },
        {
          role: 'user',
          content: "I don't have the serial number. Can I still register?",
          metadata: {
            intent: 'clarification',
            sentiment: 'concerned'
          }
        },
        {
          role: 'assistant',
          content: "I understand. While the serial number is preferred, we can still process your registration with:\n\n1. A copy of your receipt\n2. The product's model number\n3. Your purchase date\n\nWould you have any of these available?",
          metadata: {
            intent: 'alternative-solution',
            sentiment: 'helpful'
          }
        }
      ]
    },
    {
      id: 'warranty-claim',
      name: 'Warranty Claim Process',
      description: 'Customer needs to file a warranty claim',
      messages: [
        {
          role: 'user',
          content: "My sensor can stopped working after 6 months. What should I do?",
          metadata: {
            intent: 'warranty-claim',
            sentiment: 'frustrated'
          }
        },
        {
          role: 'assistant',
          content: "I'm sorry to hear about the issue. Let's get this resolved. First, let's try some troubleshooting:\n\n" + formatting.bulletList([
            "Have you checked the batteries?",
            "Is the sensor area clean and free of obstructions?",
            "Have you tried resetting the unit by removing and reinserting the batteries?"
          ]) + "\n\nIf these steps don't resolve the issue, we can process a warranty claim. Do you have your warranty registration information handy?",
          metadata: {
            intent: 'troubleshooting',
            sentiment: 'empathetic'
          }
        },
        {
          role: 'user',
          content: "I never registered it. Is it too late?",
          metadata: {
            intent: 'concern',
            sentiment: 'worried'
          }
        },
        {
          role: 'assistant',
          content: "Not at all! We can still help. The warranty is valid from the date of purchase, and we can verify this with your receipt. Would you like me to guide you through the registration and claim process?",
          metadata: {
            intent: 'reassurance',
            sentiment: 'positive'
          }
        }
      ]
    },
    {
      id: 'warranty-coverage',
      name: 'Warranty Coverage Details',
      description: 'Customer asks about specific warranty coverage',
      messages: [
        {
          role: 'user',
          content: "What exactly does the warranty cover?",
          metadata: {
            intent: 'coverage-inquiry',
            sentiment: 'neutral'
          }
        },
        {
          role: 'assistant',
          content: productDetails.warranty(products['sensor-can-45l']) + "\n\n" + formatting.bulletList([
            "Manufacturing defects",
            "Material defects",
            "Workmanship issues",
            "Normal wear and tear is not covered",
            "Damage from misuse or accidents is not covered"
          ]),
          metadata: {
            intent: 'information',
            sentiment: 'informative'
          }
        },
        {
          role: 'user',
          content: "What if I bought it from a third-party seller?",
          metadata: {
            intent: 'clarification',
            sentiment: 'concerned'
          }
        },
        {
          role: 'assistant',
          content: "Our warranty is valid regardless of where you purchased the product, as long as it's an authorized retailer. However, we'll need to verify the purchase through:\n\n" + formatting.numberedList([
            "Original receipt or invoice",
            "Product serial number",
            "Purchase date",
            "Retailer information"
          ]) + "\n\nWould you like me to help you verify your purchase?",
          metadata: {
            intent: 'clarification',
            sentiment: 'helpful'
          }
        }
      ]
    },
    {
      id: 'warranty-extension',
      name: 'Warranty Extension Options',
      description: 'Customer inquires about extended warranty options',
      messages: [
        {
          role: 'user',
          content: "Can I extend my warranty?",
          metadata: {
            intent: 'warranty-extension',
            sentiment: 'interested'
          }
        },
        {
          role: 'assistant',
          content: "Yes! We offer extended warranty options. For your sensor can, you can extend the warranty by:\n\n" + formatting.bulletList([
            "1 additional year: $29.99",
            "2 additional years: $49.99",
            "3 additional years: $69.99"
          ]) + "\n\nExtended warranties include:\n" + formatting.bulletList([
            "Coverage for all original warranty items",
            "Priority customer service",
            "Free shipping for warranty claims",
            "No deductible"
          ]) + "\n\nWould you like to learn more about any of these options?",
          metadata: {
            intent: 'sales',
            sentiment: 'positive'
          }
        }
      ]
    }
  ]
}; 