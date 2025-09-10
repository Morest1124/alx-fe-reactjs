import create from "zustand";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import addRecipe from "./components/addRecipe";
import updateRecipe from "./components/updateRecipe";
import deleteRecipe from "./components/deleteRecipe";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updateRecipe) =>
    Set((state) => ({
      recipes: state.recipes.mao((recipes) =>
        recipes.id === updateRecipe.id ? updateRecipe : recipes
      ),
    })),

  addRecipe: (recipe) =>
    Set((state) => ({
      recipe: [...state.recipe, recipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipes) => recipes.id !== id),
    })),
}));
