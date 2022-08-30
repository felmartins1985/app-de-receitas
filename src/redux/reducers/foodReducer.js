import { ADD_FOOD, FILTER_INGREDIENT, INGREDIENT_EXPLORE } from '../actions';

const INITIAL_STATE = {
  foods: [],
  filterByIngredient: false,
  ingredientExplore: '',
};

const numberMaxFoods = 11;

function foodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_FOOD:
    return {
      ...state,
      foods: action.payload.filter((_, index) => index <= numberMaxFoods),
    };
  case FILTER_INGREDIENT:
    return {
      filterByIngredient: !state.filterByIngredient,
    };
  case INGREDIENT_EXPLORE:
    return {
      ingredientExplore: action.payload,
    };
  default:
    return state;
  }
}

export default foodReducer;
