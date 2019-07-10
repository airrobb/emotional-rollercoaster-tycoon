import React from "react";
import useActions from "../../hooks/useActions";

import * as WindowActions from "./actions";

import { INITIAL_STATE, POSITIONS } from "./constants";
import reducer from "./reducer";

import {
  Window,
  WindowHeaderTitle,
  WindowHeader,
  WindowHeaderButtons
} from "../Window";
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
  const {
    endDrag,
    startDrag,
    updatePosition,
    updateSize,
    startResize,
    endResize
  } = useActions(dispatch, WindowActions);

  React.useEffect(() => {
    const removeEvents = () => {
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener(`mousemove`, updatePosition);
    };

    if (dragging) {
      window.addEventListener("mouseup", endDrag);
      window.addEventListener(`mousemove`, updatePosition);
    } else {
      removeEvents();
    }

    return removeEvents;
  }, [dragging, endDrag, updatePosition]);

  const initDrag = React.useCallback(
    e => {
      toggleWindow(id, true);
      startDrag(e);
    },
    [startDrag, toggleWindow, id]
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
        <WindowHeader onMouseDown={initDrag}>
          <WindowHeaderTitle>
            <Icon icon={icon} marginOffset={false} />
            {name}
          </WindowHeaderTitle>
          <WindowHeaderButtons>
            <Button onClick={() => toggleWindow(id, false)} square>
              _
            </Button>
            <Button square>X</Button>
          </WindowHeaderButtons>
        </WindowHeader>
        {Component && <Component />}
      </Window>
    )
  );
}

export default AppWindow;
