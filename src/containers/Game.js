import React from "react";
import styled from "styled-components";

// Containers
import Desktop from "./Desktop";

//Components
import { Main, Navigation } from "../components/Layout";

import { AppBar, AppTabs, AppMenu, AppControl } from "../components/AppBar";
import Button from "../components/Button";
import Inset from "../components/Inset";
import Icon from "../components/Icon";
import Clock from "../components/Clock";

// Images
import WindowsIcon from "../assets/images/win95-icon.png";
import AimIcon from "../assets/images/aim-icon.png";
import InternetIcon from "../assets/images/internet.ico";
import ShoutlookIcon from "../assets/images/shoutlook-icon.png";

import Regret from "./Regret";

const WINDOWS = {
  aim: {
    name: "Sinstant Messenger",
    icon: AimIcon,
    x: 0,
    y: 0,
    active: true
  },
  outlook: {
    name: "Outlook (Not So Good)",
    icon: ShoutlookIcon,
    active: true
  },
  navigator: {
    name: "RegretScape Navigator",
    icon: InternetIcon,
    active: true,
    component: Regret
  }
};

export default function Game() {
  const [windows, updateWindows] = React.useState(WINDOWS);
  const [windowOrder, setWindowOrder] = React.useState(Object.keys(WINDOWS));

  const toggleWindow = React.useCallback(
    (id, active) => {
      updateWindows({
        ...windows,
        [id]: {
          ...windows[id],
          active
        }
      });

      const copy = [...windowOrder];
      copy.splice(copy.indexOf(id), 1);

      if (active) {
        copy.push(id);
      } else {
        copy.unshift(id);
      }

      setWindowOrder(copy);
    },
    [windows, updateWindows, windowOrder, setWindowOrder]
  );

  const updatePosition = React.useCallback();

  return (
    <React.Fragment>
      <Main>
        <Desktop
          windows={windows}
          order={windowOrder}
          toggleWindow={toggleWindow}
        />
      </Main>
      <Navigation>
        <AppBar>
          <AppMenu>
            <Button>
              <Icon icon={WindowsIcon} />
              Start
            </Button>
          </AppMenu>
          <AppTabs>
            {Object.keys(windows).map(id => {
              const { name, icon, active } = windows[id];
              const isActive =
                windowOrder.indexOf(id) === windowOrder.length - 1 && active;
              return (
                <Button
                  active={isActive}
                  onClick={() => toggleWindow(id, true)}
                >
                  <Icon icon={icon} scale={0.8} />
                  {name}
                </Button>
              );
            })}
          </AppTabs>
          <AppControl>
            <Inset>
              <Clock>9:45 am</Clock>
            </Inset>
          </AppControl>
        </AppBar>
      </Navigation>
    </React.Fragment>
  );
}
