import React from "react";

import { INITIAL_STATE } from "./constants";
import reducer from "./reducer";

import { Window, WindowTitle, WindowHeader, WindowControl } from "../Window";
import Icon from "../Icon";
import Button from "../Button";

function AppWindow({
  name,
  id,
  icon,
  active,
  component: Component,
  toggleWindow
}) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  const { dragging, currX, currY, width, height } = state;

  const endDrag = React.useCallback(() => {
    dispatch({ type: "END_DRAG" });
  }, [dispatch]);

  const handleMove = React.useCallback(
    ({ clientX, clientY }) => {
      dispatch({ type: "UPDATE_POSITION", payload: { clientX, clientY } });
    },
    [dispatch]
  );

  React.useEffect(() => {
    const removeEvents = () => {
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener(`mousemove`, handleMove);
    };

    if (dragging) {
      window.addEventListener("mouseup", endDrag);
      window.addEventListener(`mousemove`, handleMove);
    } else {
      removeEvents();
    }

    return removeEvents;
  }, [dragging, endDrag, handleMove]);

  const startDrag = React.useCallback(
    ({ clientX, clientY }) => {
      dispatch({ type: "START_DRAG", payload: { clientX, clientY } });
      toggleWindow(id, true);
    },
    [dispatch, toggleWindow, id]
  );

  return (
    active && (
      <Window
        style={{
          position: "absolute",
          top: `${currY}px`,
          left: `${currX}px`,
          width: `${width}%`,
          height: `${height}%`
        }}
      >
        <WindowHeader onMouseDown={startDrag}>
          <WindowTitle>
            <Icon icon={icon} marginOffset={false} />
            {name}
          </WindowTitle>
          <WindowControl>
            <Button onClick={() => toggleWindow(id, false)} square>
              _
            </Button>
            <Button square>X</Button>
          </WindowControl>
        </WindowHeader>
        {Component && <Component />}
      </Window>
    )
  );
}

export default AppWindow;
