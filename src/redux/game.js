import * as ActionTypes from "./actionTypes";
import INITIAL_STATE from "./constants/initialState";

export const gameReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.PERFORM_ACTION: {
      return state;
    }
    case ActionTypes.CHOOSE_OUTCOME: {
      return state;
    }
    case ActionTypes.NEXT_DAY: {
      return state;
    }
    default:
      return state;
  }
};
