//action setSearchTerm and clearSearchTerm

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

export const selectSearchTerm = (state) => state.searchTerm;