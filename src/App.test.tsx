import { render } from '@testing-library/react';

import App from './App';

it('renders app component', () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
