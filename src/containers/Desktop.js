import React from "react";
import styled from "styled-components";

import AppWindow from "../components/AppWindow";

const DropFrame = styled.div``;

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
