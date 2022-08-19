import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from './index';

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

it('has correct initial value', () => {
  const { getByRole } = setup(<Search />);

  const searchInput = getByRole('searchbox');

  expect(searchInput).toHaveValue('');
});

it('focuses and types correctly', async () => {
  const { user, getByRole } = setup(<Search />);

  const searchInput = getByRole('searchbox');

  await user.click(searchInput);

  expect(searchInput).toHaveFocus();

  await user.keyboard('Botswana');

  expect(searchInput).toHaveValue('Botswana');

  await user.clear(searchInput);

  expect(searchInput).toHaveValue('');
});
