import { render } from '@testing-library/react';

import { IAppContext } from '../../../types';
import { AppContext } from '../../../context';
import { SelectedLocations } from './index';

const renderSelectedLocations = (value: IAppContext) => {
  const { queryAllByRole } = render(
    <AppContext.Provider value={ value }>
      <SelectedLocations />
    </AppContext.Provider>
  );

  return queryAllByRole;
}

it('does not render anything if locations are empty', () => {
  const value = {
    locations: [],
    addLocation: () => {},
    removeLocation: () => {},
  }

  const queryAllByRole = renderSelectedLocations(value);

  expect(queryAllByRole('contentinfo')).toEqual([]);
});

it('renders locations if locations are present in context', () => {
  const value = {
    locations: [
      { id: '1', url: 'url1' },
      { id: '2', url: 'url2' },
      { id: '3', url: 'url3' },
    ],
    addLocation: () => {},
    removeLocation: () => {},
  }

  const queryAllByRole = renderSelectedLocations(value);

  expect(queryAllByRole('contentinfo')).toHaveLength(3);
});
