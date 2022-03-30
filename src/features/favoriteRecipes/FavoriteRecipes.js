import React from 'react';

const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

export const FavoriteRecipes = (props) =>{
  return (
    <div className="recipes-container">
      {REPLACE_ME.map(makeFavoriteRecipeComponent)}
    </div>
  );
};
