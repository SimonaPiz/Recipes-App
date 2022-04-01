import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Recipe from "../../components/Recipe";
import FavoriteButton from '../../components/FavoriteButton';

//import loadData and addRecipe
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice';

const favoriteIconURL = '../https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

export const AllRecipes = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes);

  const onFirstRender = () => {
    dispatch(loadData());
  };

  useEffect(onFirstRender,[]);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton 
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
