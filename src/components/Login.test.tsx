import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import {act} from 'react';

describe('Login Component', () => {
  test('renders the login form with email and password inputs and a login button', () => {
    render(<Login onLogin={jest.fn()} />);

    // Check for email input
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    
    // Check for password input
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    
    // Check for login button
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('calls onLogin with email and password when form is submitted', () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    // Enter email
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    
    // Enter password
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    
    // Click login button
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Verify onLogin is called with the email and password
    expect(mockOnLogin).toHaveBeenCalledWith('test@example.com', 'password');
  });
});
