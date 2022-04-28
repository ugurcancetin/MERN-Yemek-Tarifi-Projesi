import { addIngredientsRoute } from './ingredients/addIngredientsRoute';
import { addMealRoute } from './meals/addMealRoute';
import { deleteIngredientRoute } from './ingredients/deleteIngredientRoute';
import { deleteMealRoute } from './meals/deleteMealRoute';
import { getMealsRoute } from './meals/getMealsRoute';

export const routes = [
    getMealsRoute,
    addMealRoute,
    deleteMealRoute,
    addIngredientsRoute,
    deleteIngredientRoute
]