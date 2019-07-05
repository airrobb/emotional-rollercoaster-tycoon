import * as ActionTypes from "./actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.END_DRAG: {
      return {
        ...state,
        prevX: state.currX,
        prevY: state.currY,
        dragging: false
      };
    }
    case ActionTypes.START_DRAG: {
      return {
        ...state,
        startX: action.payload.clientX,
        startY: action.payload.clientY,
        dragging: true
      };
    }
    case ActionTypes.UPDATE_POSITION: {
      if (!state.dragging) {
        return state;
      }

      const {
        payload: { clientX, clientY }
      } = action;
      const { prevX, prevY, startX, startY } = state;

      const nextX = prevX - (startX - clientX);
      const nextY = prevY - (startY - clientY);

      return {
        ...state,
        currX: nextX,
        currY: nextY
      };
    }
    case ActionTypes.START_RESIZE: {
      return state;
    }
    case ActionTypes.END_RESIZE: {
      return state;
    }
    case ActionTypes.UPDATE_SIZE: {
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height
      };
    }
    default:
      return state;
  }
};

export default reducer;
