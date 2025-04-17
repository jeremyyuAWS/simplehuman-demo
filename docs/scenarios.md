# SimpleHuman Demo Scenarios

This document outlines the structure and implementation of demo scenarios for the SimpleHuman AI assistant.

## Scenario Structure

Each scenario is defined in a TypeScript file under `src/data/scenarios/` and follows this structure:

```typescript
interface Scenario {
  id: string;
  name: string;
  description: string;
  metadata: {
    category: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    estimatedDuration: number;
    tags: string[];
  };
  conversations: Conversation[];
}
```

### Conversation Structure

Each conversation in a scenario consists of:

```typescript
interface Conversation {
  id: string;
  name: string;
  description: string;
  messages: Message[];
}
```

### Message Structure

Messages follow this structure:

```typescript
interface Message {
  role: 'user' | 'assistant';
  content: string;
  metadata?: {
    intent?: string;
    products?: string[];
    features?: string[];
    sentiment?: 'positive' | 'negative' | 'neutral';
  };
}
```

## Creating New Scenarios

To create a new scenario:

1. Create a new file in `src/data/scenarios/` with a descriptive name
2. Import necessary types and data
3. Define the scenario following the structure above
4. Add the scenario to the test suite in `src/tests/scenario.test.ts`

### Example Scenario

```typescript
import { Scenario } from '../types';
import { products } from '../products';

export const myNewScenario: Scenario = {
  id: 'my-new-scenario',
  name: 'My New Scenario',
  description: 'Description of what this scenario demonstrates',
  metadata: {
    category: 'product-discovery',
    difficulty: 'intermediate',
    estimatedDuration: 5,
    tags: ['feature-comparison', 'pricing']
  },
  conversations: [
    {
      id: 'conversation-1',
      name: 'Initial Inquiry',
      description: 'User asks about a specific product category',
      messages: [
        {
          role: 'user',
          content: 'I need help finding a new trash can',
          metadata: {
            intent: 'product-discovery',
            sentiment: 'neutral'
          }
        },
        {
          role: 'assistant',
          content: 'I'd be happy to help you find the perfect trash can. What features are most important to you?',
          metadata: {
            intent: 'clarification',
            sentiment: 'positive'
          }
        }
      ]
    }
  ]
};
```

## Testing Scenarios

Each scenario should be tested using the test suite in `src/tests/scenario.test.ts`. The tests verify:

1. Required fields are present
2. Metadata is valid
3. Conversation structure is correct
4. Product references are valid
5. Message structure is correct

## Best Practices

1. Keep conversations focused and self-contained
2. Use metadata to track intent and sentiment
3. Reference products by their IDs
4. Include a variety of user intents
5. Test edge cases and error handling
6. Document any special requirements or assumptions

## Available Categories

- Product Discovery
- Troubleshooting
- Order Management
- Warranty Support
- Returns
- Product Comparison
- General Information

## Available Tags

- feature-comparison
- pricing
- bundles
- technical-support
- maintenance
- warranty
- returns
- product-recommendation
- lifestyle
- family 