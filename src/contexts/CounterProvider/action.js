import * as types from  './type';

export const incrementCounter = (dispatch) => {
    dispatch({ type: types.IMCREMENT_COUNTER });
  };
  
  export const decrementCounter = (dispatch) => {
    dispatch({ type: types.DECREMENT_COUNTER });
  };