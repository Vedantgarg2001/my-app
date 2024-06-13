import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import {act} from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';

describe('Navbar Component', () => {
  test('renders Navbar with correct links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar
          logo="https://th.bing.com/th/id/OIP.7DWXljTMZ9WRrQA-nIJd_gHaHa?w=4000&h=4000&rs=1&pid=ImgDetMain"
          links={[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/contact', label: 'Contact' },
            { href: '/login', label: 'Login' },
          ]}
        />
      </MemoryRouter>
    );

    // Check for navbar links
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});

describe('Login Component', () => {
  test('navigates to the Login page and submits login form', () => {
    const handleLogin = jest.fn();
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </MemoryRouter>
    );

    // Check for login form elements
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();

    // Fill out the form and submit
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Check if the handleLogin function has been called with the correct arguments
    expect(handleLogin).toHaveBeenCalledWith('test@example.com', 'password');
  });
});
``