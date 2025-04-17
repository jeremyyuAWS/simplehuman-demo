import { DemoScenario, Product } from '../data/types';
import { kitchenProductDiscovery } from '../data/scenarios/kitchenProductDiscovery';
import { products } from '../data/products';
import { Scenario } from '../types';
import { complexTroubleshooting } from '../data/scenarios/complexTroubleshooting';
import { personalizedRecommendations } from '../data/scenarios/personalizedRecommendations';

describe('Scenario Validation', () => {
  const validateScenario = (scenario: Scenario) => {
    // Test required fields
    expect(scenario.id).toBeDefined();
    expect(scenario.name).toBeDefined();
    expect(scenario.description).toBeDefined();
    expect(scenario.metadata).toBeDefined();
    expect(scenario.conversations).toBeDefined();

    // Test metadata
    expect(['beginner', 'intermediate', 'advanced']).toContain(scenario.metadata.difficulty);
    expect(typeof scenario.metadata.estimatedDuration).toBe('number');
    expect(Array.isArray(scenario.metadata.tags)).toBe(true);

    // Test conversations
    scenario.conversations.forEach(conversation => {
      expect(conversation.id).toBeDefined();
      expect(conversation.name).toBeDefined();
      expect(conversation.description).toBeDefined();
      expect(Array.isArray(conversation.messages)).toBe(true);

      // Test messages
      conversation.messages.forEach(message => {
        expect(['user', 'assistant']).toContain(message.role);
        expect(typeof message.content).toBe('string');
        
        if (message.metadata) {
          if (message.metadata.products) {
            expect(Array.isArray(message.metadata.products)).toBe(true);
          }
          if (message.metadata.features) {
            expect(Array.isArray(message.metadata.features)).toBe(true);
          }
          if (message.metadata.sentiment) {
            expect(['positive', 'negative', 'neutral']).toContain(message.metadata.sentiment);
          }
        }
      });
    });
  };

  test('Kitchen Product Discovery Scenario', () => {
    validateScenario(kitchenProductDiscovery);
  });

  test('Complex Troubleshooting Scenario', () => {
    validateScenario(complexTroubleshooting);
  });

  test('Personalized Recommendations Scenario', () => {
    validateScenario(personalizedRecommendations);
  });

  test('Product catalog has valid structure', () => {
    Object.values(products).forEach(product => {
      expect(product.id).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.description).toBeDefined();
      expect(product.category).toBeDefined();
      expect(product.price).toBeDefined();
      expect(Array.isArray(product.features)).toBe(true);
      expect(typeof product.specifications).toBe('object');
      expect(product.warranty).toBeDefined();
      expect(product.images).toBeDefined();
    });
  });
}); 