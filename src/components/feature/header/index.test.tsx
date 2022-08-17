import { render } from '@testing-library/react';
import { Header } from './index';

it('shows correct heading content', () => {
  const { getByText } = render(<Header />);

  expect(getByText('Welcome to Weather App!')).toBeInTheDocument();
});
