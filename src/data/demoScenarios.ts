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
        message: "I'd be happy to help you find the perfect products for both spaces! For your kitchen, I'd recommend our 58L Dual Compartment Sensor Can with voice and motion control. It's our most advanced model featuring voice activation, a motion sensor, and separate compartments for trash and recycling. The fingerprint-resistant stainless steel finish keeps it looking clean and modern.",
        image: "/images/simplehuman-58L-dual-compartment-sensor-can.jpg"
      },
      { 
        sender: 'user', 
        message: "That looks nice! What about the bathroom? I want something smaller but still high-tech." 
      },
      { 
        sender: 'bot', 
        message: "For your bathroom, I'd suggest our 6L Round Sensor Can. It's compact yet sophisticated with a touchless sensor and a waterproof design perfect for bathroom environments. The rechargeable battery lasts up to 3 months per charge, and it comes in a beautiful brushed stainless steel finish that resists fingerprints and germs.",
        image: "/images/simplehuman-6L-round-sensor-can.jpg"
      },
      { 
        sender: 'user', 
        message: "Great! Now what about the soap dispenser? I want something that matches the modern look." 
      },
      { 
        sender: 'bot', 
        message: "Our 14 oz Dual Sensor Pump would be perfect! It's our most advanced soap dispenser with dual sensors for ultimate precision - one for soap and one for sanitizer. It features variable dispensing speeds, a rechargeable battery that lasts up to 3 months, and a sleek stainless steel finish that will complement your other selections perfectly.",
        image: "/images/simplehuman-14oz-dual-sensor-pump.jpg"
      },
      { 
        sender: 'user', 
        message: "Do you have any discounts if I buy all three?" 
      },
      { 
        sender: 'bot', 
        message: "Yes! I can help you with our current promotions. When you sign up for our email and text updates, you'll receive 15% off your first purchase. Additionally, as these are all sensor products, they qualify for our 'Smart Home Bundle' which includes a free set of custom-fit liners for your trash cans. Would you like me to help you create this bundle with the discount applied?" 
      },
      {
        sender: 'user',
        message: "Yes please! Can you also tell me about the warranty?"
      },
      {
        sender: 'bot',
        message: "Of course! All our sensor products come with our comprehensive warranty:\n\n- 58L Dual Compartment Sensor Can: 5-year warranty\n- 6L Round Sensor Can: 2-year warranty\n- 14 oz Dual Sensor Pump: 2-year warranty\n\nThe warranty covers mechanical defects and sensor functionality. Plus, when you register your products, you'll get exclusive access to our VIP customer service line for priority support. Would you like me to help you register these products after your purchase?"
      }
    ],
    outcomes: [
      "Multiple products recommended based on context",
      "Bundle discount offered with email signup incentive",
      "Warranty information provided proactively",
      "Product registration opportunity created",
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