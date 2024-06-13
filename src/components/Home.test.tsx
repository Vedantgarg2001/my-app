import React from 'react';
import {act} from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home page', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Home Page')).toBeInTheDocument();
});