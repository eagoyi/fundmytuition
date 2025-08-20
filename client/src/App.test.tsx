import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

test('renders the app with the header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const titleElement = screen.getByRole('link', { name: /FundMyTuition/i });
  expect(titleElement).toBeInTheDocument();
});
