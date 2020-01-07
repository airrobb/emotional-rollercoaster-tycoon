import React from "react";

import {
  WindowContent,
  WindowControl,
  WindowControlMenuItem,
  WindowControlRow,
  WindowControlDivider
} from "../components/Window";

function SinstantMessenger(props) {
  return (
    <React.Fragment>
      <WindowControl>
        <WindowControlRow>
          <WindowControlDivider />
          <WindowControlMenuItem>File</WindowControlMenuItem>
        </WindowControlRow>
      </WindowControl>
      <WindowContent>
        <iframe
          src="https://aarons.party"
          style={{ width: "100%", height: "100%" }}
        />
      </WindowContent>
    </React.Fragment>
  );
}

export default SinstantMessenger;
