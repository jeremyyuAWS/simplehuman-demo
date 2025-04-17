import { DemoScenario } from '../types';

export const personalizedRecommendations: DemoScenario = {
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
}; 