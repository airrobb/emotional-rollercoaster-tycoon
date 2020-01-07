import * as ActionTypes from "./actionTypes";

export const performAction = dispatch => (actionId, option) => {
  dispatch({
    type: ActionTypes.PERFORM_ACTION,
    payload: {
      id: actionId,
      option
    }
  });
};

export const chooseOutcome = dispatch => option => {
  dispatch({
    type: ActionTypes.CHOOSE_OUTCOME,
    payload: {
      option
    }
  });
};

export const nextDay = dispatch => () => {
  dispatch({
    type: ActionTypes.NEXT_DAY
  });
};
