// Navbar.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../path/to/Navbar';

describe('Navbar Component', () => {
  it('renders Navbar component', () => {
    render(<Navbar />);
    
    // Check if the component renders without crashing
    expect(screen.getByText(/AgenceX/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
    expect(screen.getByText(/Features/i)).toBeInTheDocument();
    expect(screen.getByText(/Blog/i)).toBeInTheDocument();
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
  });

  it('handles click events', () => {
    render(<Navbar />);
    
    // Click the "Get Started" button
    const getStartedButton = screen.getByText(/Get Started/i);
    fireEvent.click(getStartedButton);

    // Add more assertions based on your component's behavior
    // For example, you can check if the state has changed accordingly
    // You might need to add additional data-testid attributes to elements for better selection.

    // Example:
    // expect(screen.getByTestId('some-element')).toHaveClass('some-class');
  });

  // Add more test cases based on different scenarios
});

