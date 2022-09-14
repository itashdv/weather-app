import { ILocation } from '../types';

type State = {
  locations: ILocation[];
}

type Action =
  | { type: 'add'; payload: ILocation; }
  | { type: 'remove'; payload: string; }

export const reducer = ({ locations }: State, { type, payload }: Action) => {
  switch(type) {
    case 'add':
      const currentLocations = locations.filter(location => location.current);

      const state = currentLocations.length !== 0 && payload.current
        ? { locations }
        : { locations: [...locations, payload] }

      return state;
    case 'remove':
      return {
        locations: locations.filter(location => location.id !== payload)
      }
    default:
      throw new Error(`Unknown action type: ${ type }!`);
  }
}
