import React from "react";
import styled from "styled-components";

import AngelFire from "../assets/images/heat.gif";

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

const HotHotHeat = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${AngelFire}');
  background-size: 160px 60px;
  background-position: 0 20px;
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 20vw;
  }
`;

function Regret(props) {
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
                onClick: () => alert("lol too late")
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
          <WindowControlMenuItem>Edit</WindowControlMenuItem>
        </WindowControlRow>
        <WindowControlRow>
          <WindowControlDivider />
          <WindowControlColumn size="m">
            &nbsp; &nbsp;Address
          </WindowControlColumn>
          <WindowControlColumn size="fill">
            <Input value="https://www.hell.com" />
          </WindowControlColumn>
          {/* <WindowControlColumn>
            <Button>Go</Button>
          </WindowControlColumn> */}
        </WindowControlRow>
      </WindowControl>
      <WindowContent>
        <HotHotHeat>This is Fine</HotHotHeat>
      </WindowContent>
    </React.Fragment>
  );
}

export default Regret;
