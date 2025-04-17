import { DemoScenario } from '../types';

export const returnsSupport: DemoScenario = {
  title: 'Returns and Refunds',
  description: 'Customer requesting return and refund assistance',
  conversations: [
    {
      sender: 'user',
      message: "I need to return my soap dispenser, it's too big for my counter."
    },
    {
      sender: 'bot',
      message: "I'm sorry the dispenser isn't the right fit. I can help with your return. For order #SH-2024-12346:\n\n1. Still within 45-day return window\n2. Original packaging not required\n3. Free return shipping\n\nWould you like me to start the return process?"
    },
    {
      sender: 'user',
      message: "Yes please. How long for the refund?"
    },
    {
      sender: 'bot',
      message: "Here's the refund timeline:\n\n1. Return label sent to your email\n2. 2-3 days for return shipping\n3. 1-2 days for inspection\n4. 3-5 days for refund processing\n\nBefore processing, would you like to see our smaller dispenser options?"
    },
    {
      sender: 'user',
      message: "Can you show me the compact version?"
    },
    {
      sender: 'bot',
      message: "Here's our 8 oz Compact Sensor Pump:\n\n- 40% smaller footprint\n- Same smart features\n- Perfect for smaller spaces\n- Available in brushed nickel\n\nWould you like to exchange instead of return?",
      image: "/images/simplehuman-8oz-compact-sensor-pump.jpg"
    }
  ],
  outcomes: [
    "Return policy explained",
    "Refund timeline provided",
    "Alternative products suggested",
    "Exchange option offered"
  ]
}; 