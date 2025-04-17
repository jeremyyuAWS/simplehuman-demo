export interface Message {
  sender: 'user' | 'bot';
  message: string;
  image?: string;
  metadata?: {
    timestamp?: string;
    sentiment?: 'positive' | 'negative' | 'neutral';
    intent?: string;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  features: string[];
  specifications: Record<string, string>;
  warranty: {
    duration: string;
    coverage: string[];
  };
  images: {
    main: string;
    features?: string[];
    dimensions?: string;
  };
}

export interface ScenarioMetadata {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  tags: string[];
  learningObjectives: string[];
  prerequisites?: string[];
}

export interface DemoScenario {
  id: string;
  title: string;
  description: string;
  metadata: ScenarioMetadata;
  conversations: Message[];
  outcomes: string[];
  products?: Product[];
  relatedScenarios?: string[];
} 