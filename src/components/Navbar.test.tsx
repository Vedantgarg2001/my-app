
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import {act} from 'react';

test('renders Navbar with links', () => {
  const { getByText } = render(
    <Router>
      <Navbar
        logo="https://via.placeholder.com/150"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About Us' },
          { href: '/contact', label: 'Contact' },
          { href: '/login', label: 'Login' },
        ]}
      />
    </Router>
  );

  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('About Us')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
});
