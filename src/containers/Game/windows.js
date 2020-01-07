import AimIcon from "../../assets/images/aim-icon.png";
import InternetIcon from "../../assets/images/internet.ico";
import ShoutlookIcon from "../../assets/images/shoutlook-icon.png";

import Regret from "../Regret";
import Shamely from "../Shamely";
import SinstantMessenger from "../SinstantMessenger";
import SalesHorse from "../SalesHorse";
import TaskJeeves from "../TaskJeeves";

const WINDOWS = {
  navigator: {
    name: "RegretScape Navigator",
    icon: InternetIcon,
    active: true,
    component: Regret
  },
  // shamely: {
  //   name: "Shamely - HR Software",
  //   icon: InternetIcon,
  //   active: false,
  //   component: Shamely
  // },
  // sales: {
  //   name: "Sales Horse - Finance",
  //   icon: InternetIcon,
  //   active: false,
  //   component: SalesHorse
  // },
  // jeeves: {
  //   name: "Task Jeeves - FAQ",
  //   icon: InternetIcon,
  //   active: false,
  //   component: TaskJeeves
  // },
  // outlook: {
  //   name: "Outlook (Not So Good)",
  //   icon: ShoutlookIcon,
  //   active: true
  // },

  aim: {
    name: "Sinstant Messenger",
    icon: AimIcon,
    active: true,
    component: SinstantMessenger
  }
};

export default WINDOWS;
