import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from './index';

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

it('has correct initial value on mount', () => {
  const { getByRole } = setup(<Search />);

  expect(getByRole('searchbox')).toHaveValue('');
});

it('focuses and types correctly', async () => {
  const { user, getByRole } = setup(<Search />);

  await user.click(getByRole('searchbox'));

  expect(getByRole('searchbox')).toHaveFocus();

  await user.keyboard('Botswana');

  expect(getByRole('searchbox')).toHaveValue('Botswana');

  await user.clear(getByRole('searchbox'));

  expect(getByRole('searchbox')).toHaveValue('');
});
