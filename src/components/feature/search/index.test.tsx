import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from './index';

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

it('has correct initial value on mount', () => {
  const { getByRole } = setup(<Search />);

  expect(getByRole('combobox')).toHaveValue('');
});

it('focuses and types correctly, showing and removing loader', async () => {
  const { user, getByRole, findByRole, queryByRole } = setup(<Search />);

  await user.click(getByRole('combobox'));

  expect(getByRole('combobox')).toHaveFocus();

  await user.keyboard('Botswana');

  expect(await findByRole('status')).toBeInTheDocument();

  expect(getByRole('combobox')).toHaveValue('Botswana');

  await user.clear(getByRole('combobox'));

  expect(getByRole('combobox')).toHaveValue('');

  expect(queryByRole('status')).toEqual(null);
});
