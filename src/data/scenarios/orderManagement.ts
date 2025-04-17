import { DemoScenario } from '../types';

export const orderManagement: DemoScenario = {
  title: 'Order Tracking and Management',
  description: 'Customer inquiring about order status and delivery',
  conversations: [
    {
      sender: 'user',
      message: "I ordered a sensor can last week, can you check the status?"
    },
    {
      sender: 'bot',
      message: "I can help you track your order. I see your recent purchase of the 45L Rectangular Sensor Can:\n\nOrder #SH-2024-12345\n- Ordered: March 15, 2024\n- Status: In Transit\n- Expected Delivery: March 22, 2024\n\nWould you like tracking details?"
    },
    {
      sender: 'user',
      message: "Yes, and can you tell me what's included in my order?"
    },
    {
      sender: 'bot',
      message: "Your order includes:\n\n1. 45L Rectangular Sensor Can\n2. Starter pack of Code R liners\n3. 4 AA batteries\n4. Quick start guide\n\nTracking Details:\n- Carrier: FedEx\n- Current Location: Distribution Center\n- Last Update: Package in transit\n\nWould you like delivery notifications?"
    },
    {
      sender: 'user',
      message: "Can I change the delivery address?"
    },
    {
      sender: 'bot',
      message: "Since your order is already in transit, we'll need to:\n\n1. Contact FedEx for rerouting\n2. Verify the new address\n3. Additional fees may apply\n\nWould you like me to help with this process? I'll need your new delivery address."
    }
  ],
  outcomes: [
    "Order status provided",
    "Tracking information shared",
    "Order contents confirmed",
    "Delivery options explained"
  ]
}; 