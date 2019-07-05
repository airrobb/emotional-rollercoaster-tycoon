import React from "react";
import styled from "styled-components";

import AppWindow from "../components/AppWindow";

const DropFrame = styled.div``;

function Resizer({ x, y, dispatch }) {
  const updateDimensions = React.useCallback(({ clientX, clientY }) => {
    dispatch({ type: "UPDATE_DIMENSION", payload: { clientX, clientY } });
  });
  const startResize = React.useCallback(({ clientX, clientY }) => {
    dispatch({ type: "START_RESIZE", payload: { clientX, clientY } });
  });
  const endResize = React.useCallback(() => {
    dispatch({ type: "END_RESIZE" });
  });
}

const ResizeElement = styled.div`
  ${{}}
`;

Resizer.defaultProps = {};

export default function Desktop(props) {
  const { toggleWindow, windows, order } = props;

  return (
    <DropFrame>
      {order.map(id => {
        return (
          <AppWindow
            key={id}
            id={id}
            toggleWindow={toggleWindow}
            {...windows[id]}
          />
        );
      })}
    </DropFrame>
  );
}
