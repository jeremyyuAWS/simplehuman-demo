export const greetings = {
  welcome: "Hello! I'm your simplehuman assistant. How can I help you today?",
  returning: "Welcome back! How can I assist you today?",
  productInquiry: "I'd be happy to help you find the perfect product!",
  troubleshooting: "I understand you're having an issue. Let me help you resolve it.",
  orderHelp: "I can help you with your order. What would you like to know?"
};

export const formatting = {
  bulletList: (items: string[]) => items.map(item => `- ${item}`).join('\n'),
  numberedList: (items: string[]) => items.map((item, index) => `${index + 1}. ${item}`).join('\n'),
  featureList: (features: string[]) => features.map(feature => `• ${feature}`).join('\n'),
  price: (amount: number) => `$${amount.toFixed(2)}`,
  warranty: (duration: string, coverage: string[]) => 
    `Warranty: ${duration}\nCoverage:\n${formatting.bulletList(coverage)}`
};

export const commonResponses = {
  productNotFound: "I apologize, but I couldn't find that product. Could you please provide more details?",
  needMoreInfo: "To better assist you, could you provide more details about your needs?",
  maintenanceTip: "Here's a helpful maintenance tip:",
  warrantyInfo: "All our products come with a comprehensive warranty:",
  shippingInfo: "We offer free shipping on orders over $100.",
  returnPolicy: "We have a 45-day return policy with free return shipping.",
  bundleOffer: "Would you like to see our current bundle offers?",
  productRegistration: "Would you like me to help you register your product for warranty coverage?"
};

export const productDetails = {
  features: (product: any) => `Here are the key features:\n${formatting.featureList(product.features)}`,
  specifications: (product: any) => 
    `Product Specifications:\n${Object.entries(product.specifications)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')}`,
  warranty: (product: any) => formatting.warranty(product.warranty.duration, product.warranty.coverage),
  price: (product: any) => `Price: ${formatting.price(product.price)}`
}; 