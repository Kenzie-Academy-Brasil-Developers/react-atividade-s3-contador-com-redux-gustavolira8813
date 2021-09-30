import { ADD_COUNTER, REM_COUNTER } from "./actionTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNTER: {
      const { counter } = action;
      return counter;
    }
    // case REM_COUNTER: {
    //   const { counter } = action;
    //   return counter - 1;
    // }
    default:
      return state;
  }
};

export default counterReducer;
