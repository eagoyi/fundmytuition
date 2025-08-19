import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders header with title', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const titleElement = screen.getByText(/FundMyTuition/i);
  expect(titleElement).toBeInTheDocument();
});
