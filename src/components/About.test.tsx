import React from 'react';
import { render } from '@testing-library/react';
import About from './About';
import {act} from 'react';

test('renders About Us page', () => {
  const { getByText } = render(<About />);
  expect(getByText('About Us Page')).toBeInTheDocument();
});

