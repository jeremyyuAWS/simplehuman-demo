import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { useAuthStore } from './store/authStore';

// Mock the auth store
jest.mock('./store/authStore', () => ({
  useAuthStore: jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    (useAuthStore as jest.Mock).mockImplementation(() => ({
      isAuthenticated: false,
      user: null,
    }));
  });

  it('renders the app title', () => {
    render(<App />);
    expect(screen.getByText('simplehuman')).toBeInTheDocument();
  });

  it('shows login button when not authenticated', () => {
    render(<App />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('shows user name when authenticated', () => {
    (useAuthStore as jest.Mock).mockImplementation(() => ({
      isAuthenticated: true,
      user: { name: 'Test User' },
    }));

    render(<App />);
    expect(screen.getByText('Hello, Test User')).toBeInTheDocument();
  });

  it('toggles chatbot visibility', () => {
    render(<App />);
    
    // Initially chatbot should not be visible
    expect(screen.queryByText('Simplehuman Assistant')).not.toBeInTheDocument();
    
    // Click the chatbot button
    const chatbotButton = screen.getByRole('button', { name: /chatbot/i });
    fireEvent.click(chatbotButton);
    
    // Chatbot should now be visible
    expect(screen.getByText('Simplehuman Assistant')).toBeInTheDocument();
  });
}); 