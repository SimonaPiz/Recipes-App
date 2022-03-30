import React from "react";

import { AllRecipes } from "../features/allRecipes/AllRecipes";
import { FavoriteRecipes } from "../features/favoriteRecipes/FavoriteRecipes";
import { SearchTerm } from "../features/searchTerm/SearchTerm";

export function App(props) {
  const {state, dispatch} = props;

  function getFilteredRecipes(recipes, searchTerm) {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);

  const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

  return (
    <main>
      <section>
        <SearchTerm 
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes 
          favoriteRecipes={visibleFavoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>All Recipes</h2>
        <AllRecipes 
          allRecipes={visibleAllRecipes}
          dispatch={dispatch}
        />
      </section>
    </main>
  );
};