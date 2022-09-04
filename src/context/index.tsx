import { createContext, useReducer, ReactNode, FC } from 'react';

import { reducer } from './reducer';
import { ILocation, IAppContext } from '../types';

const initialValue = { locations: [] }

type ProviderProps = { children: ReactNode }

export const AppContext = createContext<IAppContext>({
  locations: [],
  addLocation: () => {},
  removeLocation: () => {},
});

export const AppProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const { locations } = state;

  const addLocation = (location: ILocation) =>
    dispatch({ type: 'add', payload: location });

  const removeLocation = (id: string) =>
    dispatch({ type: 'remove', payload: id });

  return (
    <AppContext.Provider value={{
      locations,
      addLocation,
      removeLocation
    }}>
      { children }
    </AppContext.Provider>
  );
}
