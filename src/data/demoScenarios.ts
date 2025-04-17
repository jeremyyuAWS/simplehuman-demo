import { Product } from '../types';

export const enhancedDemoScenarios = {
  'multi-intent-shopping': {
    title: 'Multi-Intent Shopping Experience',
    description: 'Customer looking for multiple products with specific requirements',
    conversations: [
      { 
        sender: 'user', 
        message: "I need a new trash can for my kitchen and bathroom, and I'm also looking for a soap dispenser. I want something modern and high-tech." 
      },
      { 
        sender: 'bot', 
        message: "I'd be happy to help you find the perfect products for both spaces! Let's start with your kitchen trash can. For a modern, high-tech kitchen, I'd recommend our 45L Rectangular Sensor Can. It features voice and motion control, a fingerprint-resistant finish, and a liner pocket for easy bag changes.",
        image: "/images/Butterfly Step Can.webp"
      },
      { 
        sender: 'user', 
        message: "That looks nice! What about the bathroom? I want something smaller but still high-tech." 
      },
      { 
        sender: 'bot', 
        message: "For your bathroom, I'd suggest our 6L Round Sensor Can. It's compact, touchless, and features a waterproof sensor. It's perfect for bathroom use and comes in a sleek white finish that complements any decor.",
        image: "/images/Bullet Can.webp"
      },
      { 
        sender: 'user', 
        message: "Great! Now what about the soap dispenser? I want something that matches the modern look." 
      },
      { 
        sender: 'bot', 
        message: "Our Touch-Free Automatic Rechargeable Sensor Pump would be perfect! It's modern, hygienic, and matches the high-tech theme of your other choices. It features a rechargeable battery and a sleek stainless steel finish.",
        image: "/images/simplehuman 9 oz. Touch-Free Automatic Rechargeable Sensor Pump.jpg"
      },
      { 
        sender: 'user', 
        message: "Do you have any discounts if I buy all three?" 
      },
      { 
        sender: 'bot', 
        message: "Yes! We have a bundle discount when you purchase multiple items. For these three products, I can offer you 15% off the total. Would you like me to add all three to your cart with the discount applied?" 
      }
    ],
    outcomes: [
      "Multiple products recommended based on context",
      "Bundle discount offered",
      "Cross-sell opportunity created",
      "Zero-party data collected: room preferences, style preferences"
    ]
  },
  'complex-troubleshooting': {
    title: 'Complex Product Troubleshooting',
    description: 'Customer with multiple product issues and questions',
    conversations: [
      { 
        sender: 'user', 
        message: "My sensor trash can isn't working properly, and I also have a question about my soap dispenser." 
      },
      { 
        sender: 'bot', 
        message: "I'll help you with both issues. Let's start with the trash can. Could you tell me which model you have and what specific issues you're experiencing?" 
      },
      { 
        sender: 'user', 
        message: "It's the 45L Rectangular Sensor Can. Sometimes it doesn't open when I wave my hand, and the battery seems to drain quickly." 
      },
      { 
        sender: 'bot', 
        message: "Let's troubleshoot both issues. For the sensor responsiveness, first check if the sensor window is clean. Also, make sure you're waving your hand within 4-6 inches of the sensor. For the battery life, how long have you had the can?" 
      },
      { 
        sender: 'user', 
        message: "About 6 months. And what about the soap dispenser? It's the Touch-Free model and sometimes it dispenses too much soap." 
      },
      { 
        sender: 'bot', 
        message: "For the trash can, after 6 months, it might be time to replace the batteries. I recommend using high-quality alkaline batteries for optimal performance. For the soap dispenser, you can adjust the dispense amount by turning the adjustment dial on the bottom. Would you like me to guide you through these steps?" 
      },
      { 
        sender: 'user', 
        message: "Yes, please. Also, do you have any tips for maintaining these products?" 
      },
      { 
        sender: 'bot', 
        message: "Absolutely! Here are some maintenance tips:\n\n1. For the trash can:\n   - Clean the sensor window weekly with a soft, dry cloth\n   - Replace batteries every 6-12 months\n   - Use our custom-fit liners for best performance\n\n2. For the soap dispenser:\n   - Clean the sensor area monthly\n   - Use the adjustment dial to find your perfect dispense amount\n   - Recharge the battery when the indicator light turns red\n\nWould you like me to send you a detailed maintenance guide via email?" 
      }
    ],
    outcomes: [
      "Multiple issues resolved in one conversation",
      "Proactive maintenance tips provided",
      "Customer education on product care",
      "Follow-up opportunity created"
    ]
  },
  'personalized-recommendations': {
    title: 'Personalized Product Recommendations',
    description: 'Customer looking for products based on specific lifestyle needs',
    conversations: [
      { 
        sender: 'user', 
        message: "I'm renovating my kitchen and want to make it more efficient. I have two young kids and need things that are easy to use and clean." 
      },
      { 
        sender: 'bot', 
        message: "I understand you need family-friendly, easy-to-maintain solutions. Let me recommend some products that would work well for your situation. For trash management, I'd suggest our 58L Dual Compartment Sensor Can. It's perfect for families as it separates recycling and trash, and the hands-free operation is great when your hands are full with kids.",
        image: "/images/simplehuman 58 Liter : 15.3 Gallon Rectangular Hands-Free Dual Compartment Recycling Kitchen Step Trash Can with Soft-Close Lid.jpg"
      },
      { 
        sender: 'user', 
        message: "That looks good! What about something for paper towels? I go through a lot with the kids." 
      },
      { 
        sender: 'bot', 
        message: "Our Standing Paper Towel Holder with Spray Pump would be perfect! It's sturdy enough to handle frequent use, and the integrated spray pump is great for quick cleanups. Plus, it's designed to be kid-friendly with its stable base.",
        image: "/images/simplehuman Standing Paper Towel Holder with Spray Pump.jpg"
      },
      { 
        sender: 'user', 
        message: "Do you have anything for organizing cleaning supplies? They're always getting messy." 
      },
      { 
        sender: 'bot', 
        message: "Yes! Our Caddy with Spray Pump is ideal for organizing cleaning supplies. It keeps everything in one place and includes a spray pump for cleaning solutions. It's also designed to be out of reach of children while still being easily accessible for you.",
        image: "/images/simplehuman Caddy with Spray Pump.jpg"
      },
      { 
        sender: 'user', 
        message: "These all look great! Do you have any tips for keeping them organized with kids?" 
      },
      { 
        sender: 'bot', 
        message: "Here are some kid-friendly organization tips:\n\n1. Place the trash can in a corner to prevent tipping\n2. Use the paper towel holder as a central station for quick cleanups\n3. Store the caddy in a high cabinet or on a shelf\n4. Consider our custom-fit liners for the trash can to prevent messes\n\nWould you like me to create a bundle with these products and include some child-proofing accessories?" 
      }
    ],
    outcomes: [
      "Personalized recommendations based on family needs",
      "Multiple products suggested for complete solution",
      "Safety and organization tips provided",
      "Bundle opportunity created"
    ]
  }
}; 