import React from 'react';
import FavoriteButton from '../../components/FavoriteButton';
import Recipe from '../../components/Recipe';

//import removeRecipe

const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

export const FavoriteRecipes = (props) =>{
  const {favoriteRecipes, dispatch} = props;

  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };

  const isEmpty = favoriteRecipes;
  if (isEmpty) {
    return (
      <div className='recipes-container'>
        <p>Choose Your Favorites Recipes!</p>
      </div>
    )
  }

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(recipe => {
        return (
          <Recipe recipe={recipe} key={recipe.id}>
            <FavoriteButton
              onClickHandler={() => onRemoveRecipeHandler(recipe)}
              icon={unfavoriteIconUrl}
            >
              Remove Favorite
            </FavoriteButton>
          </Recipe>
        )
      })}
    </div>
  );
};
