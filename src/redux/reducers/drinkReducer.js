import { ADD_DRINK } from '../actions';

const INITIAL_STATE = {
  drinks: [],
};

const numberMaxDrinks = 11;

function drinkReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_DRINK:
    return {
      ...state,
      drinks: action.payload.filter((_, index) => index <= numberMaxDrinks),
    };
  default:
    return state;
  }
}

export default drinkReducer;
