// Navbar.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/app/navbar/navbar'; 
import '@testing-library/jest-dom/extend-expect';// Adjust the path to your Navbar component

describe('Navbar', () => {
  it('renders the navbar with the correct initial state', () => {
    render(<Navbar />);
    
    // Example assertions for the initial state
    expect(screen.getByText(/ISA Co./i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    // Add more assertions based on your initial state
  });

  it.skip('toggles the mobile menu when the button is clicked', () => {
    render(<Navbar />);
    
    // Example assertions before clicking the button
    expect(screen.queryByText(/Home/i)).not.toBeVisible();

    // Click the toggle button
    fireEvent.click(screen.getByText(/togglenav/i));

    // Example assertions after clicking the button
    expect(screen.getByText(/Home/i)).toBeVisible();
    expect(screen.getByText(/Services/i)).toBeVisible();
    // Add more assertions based on the expected behavior after clicking the button
  });

  it.skip('handles navigation when a menu item is clicked', () => {
    render(<Navbar />);
    
    // Example assertions before clicking a menu item
    expect(screen.queryByText(/Contact Us/i)).not.toBeVisible();

    // Click a menu item (replace 'Contact Us' with the desired menu item)
    fireEvent.click(screen.getByText(/Contact Us/i));

    // Example assertions after clicking a menu item
    expect(screen.getByText(/Contact Us/i)).toBeVisible();
    // Add more assertions based on the expected behavior after clicking a menu item
  });

  // Add more test cases for other components, interactions, and edge cases as needed
});
