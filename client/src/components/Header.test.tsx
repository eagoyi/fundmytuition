import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders header with logo', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const logoElement = screen.getByAltText(/FundMyTuition/i);
  expect(logoElement).toBeInTheDocument();
});
