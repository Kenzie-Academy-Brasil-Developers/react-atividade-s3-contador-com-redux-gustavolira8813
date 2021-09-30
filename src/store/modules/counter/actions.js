import { ADD_COUNTER, REM_COUNTER } from "./actionTypes";

export const addCounter = (counter) => {
  return {
    type: ADD_COUNTER,
    counter: counter,
  };
};
export const remCounter = (counter) => {
  return {
    type: REM_COUNTER,
    counter: counter,
  };
};
