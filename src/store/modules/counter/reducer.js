import { ADD_COUNTER, REM_COUNTER } from "./actionTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNTER: {
      const { counter } = action;
      return state + 1;
    }
    case REM_COUNTER: {
      const { counter } = action;
      return state - 1;
    }
    default:
      return state;
  }
};

export default counterReducer;
