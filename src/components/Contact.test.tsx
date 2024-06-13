import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact page', () => {
  const { getByText } = render(<Contact />);
  expect(getByText('Contact Page')).toBeInTheDocument();
});