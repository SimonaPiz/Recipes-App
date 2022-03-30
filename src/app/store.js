import { createStore, combineReducers } from 'redux';
//import REDUCERS from feature components
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice';
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

export const store = createStore(combineReducers({
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer
}));
