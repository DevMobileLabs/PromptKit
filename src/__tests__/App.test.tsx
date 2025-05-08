import { renderWithProviders } from '@/store/renderWithProviders';
import App from '../App';

describe('<App />', () => {
  test('Text renders correctly on HomeScreen', () => {
    renderWithProviders(<App />);
  });
});
