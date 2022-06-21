export const ADD_FOOD = 'ADD_FOOD';

export const addFood = (payload) => ({
  type: ADD_FOOD,
  payload,
});

const selectEndpointFood = (radio, input) => {
  switch (radio) {
  case 'ingredient':
    return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
  case 'name':
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  case 'first-letter':
    return `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;
  default:
  }
};

const fetchApiFood = async (radio, input) => {
  const response = await fetch(selectEndpointFood(radio, input));
  const data = await response.json();
  return data;
};

export function thunkFood(radio, input) {
  return async (dispatch) => {
    try {
      const foods = await fetchApiFood(radio, input);
      dispatch(addFood({ foods }));
    } catch (error) {
      console.log(error);
    }
  };
}
