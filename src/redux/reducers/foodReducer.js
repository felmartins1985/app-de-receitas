import { ADD_FOOD } from '../actions/index';

const INITIAL_STATE = {
  foods: [],
};

function foodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_FOOD:
    return {
      ...state,
      foods: action.payload,
    };
  default:
    return state;
  }
}

export default foodReducer;
