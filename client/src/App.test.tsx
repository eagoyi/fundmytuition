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
  const titleElement = screen.getByRole('heading', { name: /FundMyTuition/i, level: 1 });
  expect(titleElement).toBeInTheDocument();
});
