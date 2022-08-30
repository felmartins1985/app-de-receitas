export const ADD_FOOD = 'ADD_FOOD';
export const ADD_DRINK = 'ADD_DRINK ';
export const FILTER_INGREDIENT = 'FILTER_INGREDIENT';
export const INGREDIENT_EXPLORE = 'INGREDIENT_EXPLORE';

export const addFood = (payload) => ({
  type: ADD_FOOD,
  payload,
});

export const addDrink = (payload) => ({
  type: ADD_DRINK,
  payload,
});

export const filterByIngredient = () => ({
  type: FILTER_INGREDIENT,
});

export const setIngredientExplore = (payload) => ({
  type: INGREDIENT_EXPLORE,
  payload,
});
