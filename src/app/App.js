import React from "react";

import { AllRecipes } from "../features/allRecipes/AllRecipes";
import { FavoriteRecipes } from "../features/favoriteRecipes/FavoriteRecipes";
import { SearchTerm } from "../features/searchTerm/SearchTerm";

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes />
      </section>
      <section>
        <h2>All Recipes</h2>
        <AllRecipes />
      </section>
    </main>
  );
};