import React from 'react';
import { render, screen } from '@testing-library/react';;
import SamuraiTSApp from './App';

test('renders learn react link', () => {
  render(<SamuraiTSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
