import { ADD_FOOD, FILTER_INGREDIENT } from '../actions';

const INITIAL_STATE = {
  foods: [],
  filterByIngredient: false,
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
  default:
    return state;
  }
}

export default foodReducer;
