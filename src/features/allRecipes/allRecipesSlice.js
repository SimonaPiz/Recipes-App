import allRecipesData from '../../../data';

//action loadData
export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  }
};

const initialState = [];

export const allRecipesReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return action.payload;
    case 'favoriteRecipes/addRecipe':
      return allRecipesData.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/revomeRecipes':
      return [...allRecipesData, action.payload];
    default: 
      return allRecipes;
  }
};