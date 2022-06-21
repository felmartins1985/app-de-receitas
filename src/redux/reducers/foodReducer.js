import { ADD_FOOD } from '../actions';

const INITIAL_STATE = {
  foods: [],
};

const numberMaxFoods = 11;

function foodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_FOOD:
    return {
      ...state,
      foods: action.payload.filter((_, index) => index <= numberMaxFoods),
    };
  default:
    return state;
  }
}

export default foodReducer;
