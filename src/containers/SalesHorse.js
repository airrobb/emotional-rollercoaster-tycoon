import React from "react";

import {
  WindowContent,
  WindowControl,
  WindowControlMenuItem,
  WindowControlRow,
  WindowControlColumn,
  WindowControlDivider
} from "../components/Window";
import { Input } from "../components/FormElements";
import FlyoutMenu from "../components/FlyoutMenu";

function SalesHorse(props) {
  return (
    <React.Fragment>
      <WindowControl>
        <WindowControlRow>
          <WindowControlDivider />
          <FlyoutMenu
            component={<WindowControlMenuItem>File</WindowControlMenuItem>}
            options={[
              {
                text: "For Divorce",
                onClick: () =>
                  alert("Hah like anyone would marry you in the first place")
              },
              {
                text: "Your Taxes",
                onClick: () => alert("Getting a jumpstart on next year huh?")
              },
              {
                text: "For Bankruptcy",
                onClick: () => alert("It doesn't work like that, bub.")
              }
            ]}
          />
          <FlyoutMenu
            component={<WindowControlMenuItem>Edit</WindowControlMenuItem>}
            options={[
              {
                text: "Your Resume",
                onClick: () =>
                  alert(
                    "Just say you to got a masters in medieval literature and you're all set"
                  )
              },
              {
                text: "Your Last Will annd Testament",
                onClick: () =>
                  alert(
                    "Thanks for willing everything to your personal browsing assistant bucko."
                  )
              }
            ]}
          />
        </WindowControlRow>
        <WindowControlRow>
          <WindowControlDivider />
          <WindowControlColumn size="m">
            &nbsp; &nbsp;Address
          </WindowControlColumn>
          <WindowControlColumn size="fill">
            <Input value="https://www.saleshorse.com" />
          </WindowControlColumn>
          {/* <WindowControlColumn>
            <Button>Go</Button>
          </WindowControlColumn> */}
        </WindowControlRow>
      </WindowControl>
      <WindowContent>Sales Force Clone;</WindowContent>
    </React.Fragment>
  );
}

export default SalesHorse;
