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
        message: "I'd be happy to help you create a modern, tech-savvy setup for both spaces! Based on your interest in high-tech solutions, I'll recommend our most innovative products. For your kitchen, I'd suggest our 58L Dual Compartment Sensor Can with voice and motion control. It's our most advanced model that lets you simply say 'open can' or wave your hand. Plus, it helps with recycling by having separate compartments.",
        image: "/images/simplehuman-58L-dual-compartment-sensor-can.jpg"
      },
      { 
        sender: 'user', 
        message: "That looks nice! What about the bathroom? I want something smaller but still high-tech." 
      },
      { 
        sender: 'bot', 
        message: "For your bathroom, I'd recommend our 6L Round Sensor Can. It's perfectly sized for bathrooms and features our latest sensor technology. What makes it special is its waterproof sensor and rechargeable battery that lasts up to 3 months. The brushed stainless steel finish is not just beautiful - it has a nano-silver coating that prevents fingerprints and germs, perfect for bathroom hygiene.",
        image: "/images/simplehuman-6L-round-sensor-can.jpg"
      },
      { 
        sender: 'user', 
        message: "Great! Now what about the soap dispenser? I want something that matches the modern look." 
      },
      { 
        sender: 'bot', 
        message: "You'll love our 14 oz Dual Sensor Pump! It's our smartest dispenser yet, with separate sensors for soap and sanitizer. The variable dispensing speeds mean you can get just a drop for hand soap or a larger amount for dishes. It even has smart timing technology that dispenses sanitizer for exactly 20 seconds - the CDC-recommended hand washing time. The stainless steel finish will perfectly complement your other choices.",
        image: "/images/simplehuman-14oz-dual-sensor-pump.jpg"
      },
      {
        sender: 'user',
        message: "These all sound perfect! Any special deals available?"
      },
      {
        sender: 'bot',
        message: "I've got some great news! I can create a 'Smart Home Essentials' bundle for you that includes:\n\n1. 15% off your first purchase when you sign up for our updates\n2. A free set of custom-fit liners for both trash cans (6-month supply)\n3. Complimentary soap refill with the sensor pump\n4. Priority shipping\n\nPlus, all these products qualify for our extended warranty program. Would you like me to explain the warranty details?"
      },
      {
        sender: 'user',
        message: "Yes please! And do you have any maintenance tips?"
      },
      {
        sender: 'bot',
        message: "Absolutely! Here's your complete care guide:\n\nWarranty Coverage:\n- 58L Dual Compartment Sensor Can: 5-year warranty\n- 6L Round Sensor Can: 2-year warranty\n- 14 oz Dual Sensor Pump: 2-year warranty\n\nMaintenance Tips:\n1. For Sensor Cans:\n   - Clean sensors monthly with a soft cloth\n   - Use our custom-fit liners for optimal performance\n   - Keep voice sensor area clear for best response\n\n2. For Sensor Pump:\n   - Clean nozzle weekly to prevent clogging\n   - Recharge when LED indicator turns red\n   - Use simplehuman soap refills for best performance\n\nWould you like me to set up automatic refill deliveries for your liners and soap?"
      }
    ],
    outcomes: [
      "Personalized tech-focused recommendations",
      "Bundle creation with exclusive benefits",
      "Proactive maintenance guidance",
      "Subscription opportunity created"
    ]
  },
  'complex-troubleshooting': {
    title: 'Complex Product Troubleshooting',
    description: 'Customer with multiple product issues and questions',
    conversations: [
      { 
        sender: 'user', 
        message: "My sensor trash can isn't opening consistently, and my soap dispenser is acting up. Really frustrated!" 
      },
      { 
        sender: 'bot', 
        message: "I understand your frustration, and I'm here to help resolve both issues. First, could you tell me which sensor can model you have? This will help me provide the most accurate troubleshooting steps.",
      },
      { 
        sender: 'user', 
        message: "It's the 45L Rectangular Sensor Can, and the sensor pump is the automatic one." 
      },
      { 
        sender: 'bot', 
        message: "Thank you for those details. Let's troubleshoot your 45L Sensor Can first:\n\n1. Check the sensor window - is it clean and unobstructed?\n2. Are you waving your hand 4-6 inches from the sensor?\n3. Have you replaced the batteries recently?\n\nHere's a view of the sensor location:",
        image: "/images/simplehuman-45L-rectangular-sensor-can.jpg"
      },
      {
        sender: 'user',
        message: "The sensor might be dirty, and I haven't changed the batteries in a while."
      },
      {
        sender: 'bot',
        message: "Let's address both issues:\n\n1. For the sensor:\n   - Gently clean with a soft, dry cloth\n   - Remove any residue or buildup\n   - Ensure no objects are within 6 inches\n\n2. For the batteries:\n   - Replace with fresh AA batteries\n   - Make sure they're properly aligned\n   - Close battery compartment fully\n\nWould you like me to help with the soap dispenser next?"
      },
      {
        sender: 'user',
        message: "Yes, the soap dispenser sometimes dispenses too much soap."
      },
      {
        sender: 'bot',
        message: "For your Sensor Pump, inconsistent dispensing is usually related to:\n\n1. Sensitivity setting\n2. Soap viscosity\n3. Pump maintenance\n\nHere's the Sensor Pump with adjustment controls visible:",
        image: "/images/simplehuman-sensor-pump.jpg"
      },
      {
        sender: 'user',
        message: "How do I adjust the settings?"
      },
      {
        sender: 'bot',
        message: "Here's how to adjust your Sensor Pump:\n\n1. Dispensing amount:\n   - Locate the control dial under the base\n   - Turn clockwise for less soap\n   - Turn counterclockwise for more\n\n2. Regular maintenance:\n   - Clean the nozzle monthly\n   - Use recommended soap viscosity\n   - Check battery level\n\nWould you like me to send you our detailed maintenance guide?"
      },
      {
        sender: 'user',
        message: "Yes please, that would be helpful."
      },
      {
        sender: 'bot',
        message: "I'll email you our maintenance guide. Also, I notice both products are still under warranty. Would you like me to:\n\n1. Register your products if you haven't already\n2. Set up maintenance reminders\n3. Send you our recommended cleaning supplies\n\nThis will help prevent future issues and extend the life of your products."
      }
    ],
    outcomes: [
      "Step-by-step troubleshooting provided",
      "Maintenance guidance shared",
      "Warranty support offered",
      "Future prevention tips given"
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
        message: "I understand you need family-friendly, efficient solutions! For a kitchen with young kids, I recommend our 45L Rectangular Sensor Can because:\n\n- Hands-free operation when hands are messy\n- Fingerprint-resistant finish stays clean\n- Sturdy design won't tip over\n- Easy-to-clean surfaces",
        image: "/images/simplehuman-45L-rectangular-sensor-can.jpg"
      },
      { 
        sender: 'user', 
        message: "That looks good! What about organizing cleaning supplies?" 
      },
      { 
        sender: 'bot', 
        message: "For safe and organized cleaning storage, I'd recommend our Sink Caddy. It features:\n\n- Elevated design keeps supplies away from children\n- Ventilated for quick drying\n- Removable dividers for customization\n- Strong suction cup mounting",
        image: "/images/simplehuman-sink-caddy.jpg"
      },
      {
        sender: 'user',
        message: "Perfect! Do you have any paper towel holders?"
      },
      {
        sender: 'bot',
        message: "Yes! Our Quick-Grip Paper Towel Holder is great for families:\n\n- One-handed tear feature\n- Stable base prevents tipping\n- Quick roll replacement\n- Fingerprint-resistant finish",
        image: "/images/simplehuman-paper-towel-holder.jpg"
      },
      {
        sender: 'user',
        message: "These all look great for the kids! Any special offers?"
      },
      {
        sender: 'bot',
        message: "Yes! For families, I can offer:\n\n1. Kitchen Organization Set:\n   - 45L Sensor Can\n   - Sink Caddy\n   - Paper Towel Holder\n   - 15% off with email signup\n\n2. Additional Benefits:\n   - Free shipping over $100\n   - Extended warranty registration\n   - Easy-care instructions\n\nWould you like to see the total for this family-friendly set?"
      },
      {
        sender: 'user',
        message: "Yes, and do you have any cleaning tips?"
      },
      {
        sender: 'bot',
        message: "Here are some family-friendly care tips:\n\n1. For the Sensor Can:\n   - Wipe with soft cloth daily\n   - Use custom-fit liners to prevent messes\n   - Clean sensor monthly\n\n2. For the Caddy:\n   - Rinse weekly\n   - Check suction cup monthly\n   - Adjust position as needed\n\n3. For the Paper Towel Holder:\n   - Wipe base weekly\n   - Clean tension arm monthly\n\nWould you like me to add these items to your cart and include our recommended cleaning supplies?"
      }
    ],
    outcomes: [
      "Family-specific recommendations made",
      "Safety features highlighted",
      "Care instructions provided",
      "Bundle opportunity created"
    ]
  },
  'kitchen-product-discovery': {
    title: 'Kitchen Product Discovery',
    description: 'Detailed product consultation for kitchen solutions',
    conversations: [
      {
        sender: 'user',
        message: "I need a new trash can for my kitchen"
      },
      {
        sender: 'bot',
        message: "I'd be happy to help you find the perfect kitchen trash can! To recommend the best option, could you tell me a few things about your kitchen and preferences?\n\n1. How much space do you have for the trash can?\n2. Do you separate recycling?\n3. Do you prefer hands-free operation?"
      },
      {
        sender: 'user',
        message: "I have a good amount of space, and yes, I do recycle. Hands-free would be nice since I cook a lot."
      },
      {
        sender: 'bot',
        message: "Based on your needs, I'd recommend our 58L Dual Compartment Sensor Can. It's perfect for cooking enthusiasts because:\n\n- Motion sensor keeps your hands free while cooking\n- Dual compartments make recycling convenient\n- Extra-wide opening for easy food scraps disposal\n- Fingerprint-resistant stainless steel stays clean",
        image: "/images/simplehuman-58L-rectangular-sensor-can.jpg"
      },
      {
        sender: 'user',
        message: "That looks nice! How big are the compartments?"
      },
      {
        sender: 'bot',
        message: "The 58L Dual Compartment is thoughtfully designed with:\n\n- Main compartment: 34L for regular trash\n- Recycling compartment: 24L for recyclables\n\nIt uses our custom-fit liners (Code H) for a perfect fit every time.",
        image: "/images/simplehuman-58L-rectangular-sensor-can-open.jpg"
      },
      {
        sender: 'user',
        message: "Do you have anything slightly smaller? I like the features but I'm not sure about the size."
      },
      {
        sender: 'bot',
        message: "Absolutely! Let me show you our 45L Rectangular Sensor Can. It's our most popular kitchen model because it combines a space-efficient design with advanced features:\n\n- Motion sensor for hands-free operation\n- Built-in liner storage\n- Fingerprint-resistant finish\n- Perfect for standard kitchen layouts",
        image: "/images/simplehuman-45L-rectangular-sensor-can.jpg"
      },
      {
        sender: 'user',
        message: "That's better. What about maintenance and cleaning?"
      },
      {
        sender: 'bot',
        message: "Our cans are designed for easy maintenance:\n\n- Removable inner bucket for deep cleaning\n- Nano-silver coating resists germs and fingerprints\n- Smooth surfaces wipe clean easily\n- Regular cleaning of the sensor area ensures optimal performance",
        image: "/images/simplehuman-45L-rectangular-sensor-can-features.jpg"
      },
      {
        sender: 'user',
        message: "Great! What comes with it? And do you have any special offers?"
      },
      {
        sender: 'bot',
        message: "Your 45L Rectangular Sensor Can includes:\n\n1. Starter pack of custom-fit liners (Code R)\n2. 4 AA batteries\n3. 2-year warranty\n4. Care instructions\n\nCurrently, we have a special offer:\n- 15% off with email signup\n- Free shipping on orders over $100\n- 6-month liner subscription available\n\nWould you like me to help you with the purchase?"
      },
      {
        sender: 'user',
        message: "Yes please! Can you tell me about the warranty?"
      },
      {
        sender: 'bot',
        message: "Of course! The warranty covers:\n\n1. Mechanical Parts:\n   - Sensor mechanism\n   - Lid operation\n   - Foot pedal\n\n2. Finish:\n   - Nano-silver coating\n   - Stainless steel surface\n\nYou can register your product on our website for easy warranty claims. Would you like me to help you complete your purchase and set up the product registration?"
      }
    ],
    outcomes: [
      "Product recommendations based on needs",
      "Feature comparison provided",
      "Warranty information shared",
      "Purchase opportunity created"
    ]
  }
}; 