import { ADD_DRINK, FILTER_INGREDIENT } from '../actions';

const INITIAL_STATE = {
  drinks: [],
  filterByIngredient: false,
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
  default:
    return state;
  }
}

export default drinkReducer;
