import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders social feed', () => {
  render(<App />);
  const placeholderElement = screen.getByPlaceholderText(/What's happening?/i);
  expect(placeholderElement).toBeDefined();
});

test('renders navigation links', () => {
  render(<App />);
  const profileLink = screen.getByText(/Profile/i);
  const campaignLink = screen.getByText(/Campaigns/i);
  const raiseIssueLink = screen.getByText(/Raise Issue/i);
  const loginLink = screen.getByText(/Login/i);

  expect(profileLink).toBeDefined();
  expect(campaignLink).toBeDefined();
  expect(raiseIssueLink).toBeDefined();
  expect(loginLink).toBeDefined();
});
