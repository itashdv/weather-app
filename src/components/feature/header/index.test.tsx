import { render } from '@testing-library/react';

import { Header } from './index';

it('shows correct heading content', () => {
  const { getByRole } = render(<Header />);

  expect(getByRole('heading')).toBeInTheDocument();

  expect(getByRole('heading')).toHaveTextContent('Welcome to Weather App!');
});
