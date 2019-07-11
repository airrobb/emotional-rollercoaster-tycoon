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
  background-position: bottom;
  background-repeat: repeat-x;
  display: grid;
  grid-auto-rows: max-content;
  align-content: center;
  justify-content: center;
  font-size: 4rem;
  background-color: white;
  text-align: center;

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
            <Input value="https://www.hell.com" />
          </WindowControlColumn>
          {/* <WindowControlColumn>
            <Button>Go</Button>
          </WindowControlColumn> */}
        </WindowControlRow>
      </WindowControl>
      <WindowContent>
        <HotHotHeat>
          <h1 style={{ margin: "0px" }}>Take a seat</h1>
          <h5 style={{ margin: "0px" }}>You might be here for a while</h5>
        </HotHotHeat>
      </WindowContent>
    </React.Fragment>
  );
}

export default Regret;
