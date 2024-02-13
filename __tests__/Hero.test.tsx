// hero.test.tsx
import { render, screen } from '@testing-library/react';
import Hero from '@/components/app/hero/hero';
import '@testing-library/jest-dom/extend-expect';

// Mocking the react-type-animation library
jest.mock('react-type-animation', () => ({
  TypeAnimation: ({ sequence, speed }: { sequence: string; speed: number }) => <span>{sequence}</span>,
}));

// Mocking the heroData
jest.mock('../src/data/main/mainPage', () => ({
  heroData: {
    title: 'Mock Title',
    subtitle: 'Mock Subtitle',
    description: 'Mock Description',
    buttonText: 'Mock Button',
    imageUrl: 'mock-image-url.jpg',
  },
}));

describe('Hero', () => {
  it('renders the hero section with the correct data', () => {
    render(<Hero />);
    
    // Example assertions for the initial state
    expect(screen.getByText(/Mock Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Subtitle/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Button/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Hero image/i)).toBeInTheDocument();
  });
  
  // Add more test cases for other components, interactions, and edge cases as needed
});
