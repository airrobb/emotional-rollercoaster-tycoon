import * as ActionTypes from "./actionTypes";

export const startResize = dispatch => ({ clientX, clientY }) => {
  dispatch({
    type: ActionTypes.START_RESIZE,
    payload: {
      clientX,
      clientY
    }
  });
};

export const endResize = dispatch => () => {
  dispatch({ type: ActionTypes.END_RESIZE });
};

export const updateSize = dispatch => ({ clientX, clientY }) => {
  dispatch({
    type: ActionTypes.UPDATE_SIZE,
    payload: { clientX, clientY }
  });
};

export const startDrag = dispatch => ({ clientX, clientY }) => {
  dispatch({
    type: ActionTypes.START_DRAG,
    payload: {
      clientX,
      clientY
    }
  });
};

export const endDrag = dispatch => () => {
  dispatch({ type: ActionTypes.END_DRAG });
};

export const updatePosition = dispatch => ({ clientX, clientY }) => {
  dispatch({
    type: ActionTypes.UPDATE_POSITION,
    payload: { clientX, clientY }
  });
};
