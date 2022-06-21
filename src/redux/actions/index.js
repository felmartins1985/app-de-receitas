export const ADD_FOOD = 'ADD_FOOD';
export const ADD_DRINK = 'ADD_DRINK ';

export const addFood = (payload) => ({
  type: ADD_FOOD,
  payload,
});

export const addDrink = (payload) => ({
  type: ADD_DRINK,
  payload,
});
