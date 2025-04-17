import { Scenario, Conversation, Message } from '../../types';
import { products } from '../products';
import { greetings, formatting, commonResponses, productDetails } from '../templates';

export const kitchenProductDiscovery: Scenario = {
  id: 'kitchen-product-discovery',
  name: 'Kitchen Product Discovery',
  description: 'Detailed product consultation for kitchen solutions',
  metadata: {
    difficulty: 'beginner',
    estimatedDuration: 15, // in minutes
    tags: ['product discovery', 'kitchen', 'trash cans', 'recycling']
  },
  conversations: [
    {
      id: 'initial-inquiry',
      name: 'Initial Product Inquiry',
      description: 'Customer seeking a new kitchen trash can',
      messages: [
        {
          role: 'user',
          content: "I need a new trash can for my kitchen"
        },
        {
          role: 'assistant',
          content: greetings.productInquiry + "\n\nTo recommend the best option, could you tell me a few things about your kitchen and preferences?\n\n1. How much space do you have for the trash can?\n2. Do you separate recycling?\n3. Do you prefer hands-free operation?"
        },
        {
          role: 'user',
          content: "I have a good amount of space, and yes, I do recycle. Hands-free would be nice since I cook a lot."
        },
        {
          role: 'assistant',
          content: `Based on your needs, I'd recommend our ${products['sensor-can-58l'].name}. It's perfect for cooking enthusiasts because:\n\n${formatting.bulletList(products['sensor-can-58l'].features)}`,
          metadata: {
            products: [products['sensor-can-58l'].id]
          }
        }
      ]
    },
    {
      id: 'product-details',
      name: 'Product Details Discussion',
      description: 'Discussing specific product features and alternatives',
      messages: [
        {
          role: 'user',
          content: "That looks nice! How big are the compartments?"
        },
        {
          role: 'assistant',
          content: `The ${products['sensor-can-58l'].name} is thoughtfully designed with:\n\n${formatting.bulletList([
            `Main compartment: ${products['sensor-can-58l'].specifications['Capacity'].split('(')[1].split(',')[0]}`,
            `Recycling compartment: ${products['sensor-can-58l'].specifications['Capacity'].split(',')[1].split(')')[0]}`,
            `Uses ${products['sensor-can-58l'].specifications['Liner Type']} liners for a perfect fit`
          ])}`,
          metadata: {
            products: [products['sensor-can-58l'].id]
          }
        },
        {
          role: 'user',
          content: "Do you have anything slightly smaller? I like the features but I'm not sure about the size."
        },
        {
          role: 'assistant',
          content: `Absolutely! Let me show you our ${products['sensor-can-45l'].name}. It's our most popular kitchen model because:\n\n${formatting.bulletList(products['sensor-can-45l'].features)}`,
          metadata: {
            products: [products['sensor-can-45l'].id]
          }
        }
      ]
    },
    {
      id: 'maintenance-and-purchase',
      name: 'Maintenance and Purchase Discussion',
      description: 'Covering maintenance, warranty, and purchase options',
      messages: [
        {
          role: 'user',
          content: "That's better. What about maintenance and cleaning?"
        },
        {
          role: 'assistant',
          content: commonResponses.maintenanceTip + "\n\n" + formatting.bulletList([
            "Removable inner bucket for deep cleaning",
            "Nano-silver coating resists germs and fingerprints",
            "Smooth surfaces wipe clean easily",
            "Regular cleaning of the sensor area ensures optimal performance"
          ]),
          metadata: {
            products: [products['sensor-can-45l'].id]
          }
        },
        {
          role: 'user',
          content: "Great! What comes with it? And do you have any special offers?"
        },
        {
          role: 'assistant',
          content: `Your ${products['sensor-can-45l'].name} includes:\n\n${formatting.numberedList([
            `Starter pack of ${products['sensor-can-45l'].specifications['Liner Type']} liners`,
            "4 AA batteries",
            "2-year warranty",
            "Care instructions"
          ])}\n\nCurrently, we have a special offer:\n${formatting.bulletList([
            "15% off with email signup",
            commonResponses.shippingInfo,
            "6-month liner subscription available"
          ])}\n\nWould you like me to help you with the purchase?`,
          metadata: {
            products: [products['sensor-can-45l'].id]
          }
        },
        {
          role: 'user',
          content: "Yes please! Can you tell me about the warranty?"
        },
        {
          role: 'assistant',
          content: commonResponses.warrantyInfo + "\n\n" + productDetails.warranty(products['sensor-can-45l']) + "\n\n" + commonResponses.productRegistration,
          metadata: {
            products: [products['sensor-can-45l'].id]
          }
        }
      ]
    }
  ]
}; 