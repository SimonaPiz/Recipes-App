//action setSearchTerm and clearSearchTerm

import { SearchTerm } from "./SearchTerm";

const initialState = '';

export function setSearchTerm (input) {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: input
  };
};

export function clearSearchTerm () {
  return {
    type: 'searchTerm/clearSearchTerm'
  };
};

export const searchTermReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default:
      return state;
  };
};