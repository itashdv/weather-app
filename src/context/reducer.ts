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
      return { locations: [...locations, payload] }
    case 'remove':
      return {
        locations: locations.filter(location => location.id !== payload)
      }
    default:
      throw new Error(`Unknown action type: ${ type }!`);
  }
}
