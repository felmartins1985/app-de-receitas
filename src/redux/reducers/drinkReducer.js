import { ADD_DRINK, FILTER_INGREDIENT, INGREDIENT_EXPLORE } from '../actions';

const INITIAL_STATE = {
  drinks: [],
  filterByIngredient: false,
  ingredientExplore: '',
};

const numberMaxDrinks = 11;

function drinkReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_DRINK:
    return {
      ...state,
      drinks: action.payload.filter((_, index) => index <= numberMaxDrinks),
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

export default drinkReducer;
