/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect'
import Hero from '@/app/components/hero/hero';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Hero', () => {
  it('renders the Hero component with initial state', () => {
    render(<Hero />);

    // Example assertions for the initial state
    expect(screen.getByText(/marketing/i)).toBeInTheDocument();
    expect(screen.getByText(/social media marketing is the best ever/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/enter your email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  it('updates the email input value on user input', () => {
    render(<Hero />);

    // Example assertions before user input
    const emailInput = screen.getByPlaceholderText('johndoe@gmail.com');
    expect(emailInput).toHaveValue('');

    // Type an email into the input field
    userEvent.type(emailInput, 'test@example.com');

    // Example assertions after user input
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('triggers the form submission on button click', async () => {
    render(<Hero />);

    // Mock an API request if needed
    // jest.mock('./api', () => ({
    //   submitForm: jest.fn(() => Promise.resolve({ success: true })),
    // }));

    // Example assertions before form submission
    expect(screen.queryByText(/thank you for subscribing/i)).not.toBeInTheDocument();

    // Click the "Get Started" button
    userEvent.click(screen.getByRole('button', { name: /get started/i }));

    // Wait for the asynchronous form submission
    // Adjust the time or use mock data and mock functions as needed
    await waitFor(() => {
      expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument();
    });

    // Example assertions after form submission
    expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument();
  });

  // Add more test cases for other components, interactions, and edge cases as needed
});
