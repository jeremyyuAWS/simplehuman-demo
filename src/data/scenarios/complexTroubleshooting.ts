import { DemoScenario } from '../types';

export const complexTroubleshooting: DemoScenario = {
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
}; 