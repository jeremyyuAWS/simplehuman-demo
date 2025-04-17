import { DemoScenario } from '../types';

export const productComparison: DemoScenario = {
  title: 'Product Comparison and Selection',
  description: 'Customer comparing different models to make an informed decision',
  conversations: [
    {
      sender: 'user',
      message: "What's the difference between your sensor trash cans?"
    },
    {
      sender: 'bot',
      message: "I'll help you compare our most popular sensor cans:\n\n1. 58L Dual Compartment:\n- Largest capacity with recycling section\n- Dual compartment design\n- Best for large families\n\n2. 45L Rectangular:\n- Most popular size\n- Single compartment\n- Perfect for average households\n\nHere's a side-by-side view:",
      image: "/images/simplehuman-sensor-can-comparison.jpg"
    },
    {
      sender: 'user',
      message: "What about the sensor technology? Are they different?"
    },
    {
      sender: 'bot',
      message: "Both models share our latest sensor technology:\n\n- Multi-sense technology\n- 6-inch detection range\n- Adaptive sensing\n- Battery life indicator\n\nThe main differences are:\n1. Lid opening width\n2. Compartment configuration\n3. Liner compatibility",
      image: "/images/simplehuman-sensor-technology.jpg"
    },
    {
      sender: 'user',
      message: "And the price difference?"
    },
    {
      sender: 'bot',
      message: "Here's the pricing breakdown:\n\n58L Dual Compartment:\n- Regular price: $250\n- Includes recycling feature\n- Code H liners\n\n45L Rectangular:\n- Regular price: $200\n- Code R liners\n\nBoth include:\n- 2-year warranty\n- Free shipping\n- Starter pack of liners"
    },
    {
      sender: 'user',
      message: "Which one is more popular for kitchens?"
    },
    {
      sender: 'bot',
      message: "The 45L Rectangular is our most popular kitchen model because:\n\n1. Fits standard kitchen spaces\n2. Adequate capacity for 4-5 person household\n3. More cost-effective\n4. Easier to place against walls\n\nWould you like to see more details about either model?"
    }
  ],
  outcomes: [
    "Detailed feature comparison",
    "Price comparison provided",
    "Size recommendations made",
    "Technical specifications explained"
  ]
}; 