import React from "react";

// Constants;
import WINDOWS from "./windows";

// Containers
import Desktop from "../Desktop";

//Components
import { Main, Navigation } from "../../components/Layout";
import { AppBar, AppTabs, AppMenu, AppControl } from "../../components/AppBar";
import Button from "../../components/Button";
import Inset from "../../components/Inset";
import Icon from "../../components/Icon";
import Clock from "../../components/Clock";

// Images
import WindowsIcon from "../../assets/images/win95-icon.png";

import FlyoutMenu from "../../components/FlyoutMenu";
import Robbie from "../../components/Robbie/index";
import RobbiePrompts from "../../components/Robbie/defaultPrompts";

const usedPrompts = RobbiePrompts;

export default function Game() {
  const [windows, updateWindows] = React.useState(WINDOWS);
  const [windowOrder, setWindowOrder] = React.useState(
    Object.keys(WINDOWS).reverse()
  );

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
            <FlyoutMenu
              component={
                <Button>
                  <Icon icon={WindowsIcon} />
                  Start
                </Button>
              }
              options={[
                {
                  text: "That novel you always said you would write",
                  onClick: () => alert("Hahahaha oh man, good one.")
                },
                {
                  text: "Going to the gym and dieting",
                  onClick: () =>
                    alert(
                      "Your previous gym still has a debt collection agency going after you, try resolving that first."
                    )
                },
                {
                  text: "Really focusing on 'you' this year.",
                  onClick: () =>
                    alert("Narcissism is what got you here in the first place.")
                }
              ]}
              position="top"
            />
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
      <Robbie prompts={usedPrompts} delay={7000} scale={1} />
    </React.Fragment>
  );
}
