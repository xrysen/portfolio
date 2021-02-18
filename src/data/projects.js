import acEditor from "../assets/ac-pixel.png";
import matchr from "../assets/matchr.png";
import matchrMobile from "../assets/matchrMobile.png";
import amethyst from "../assets/amethystStatic.png";
import amethystAni from "../assets/amethystAni.gif";
import rysenRanch from "../assets/ranchAni.gif";
import ranchStatic from "../assets/ranchStatic.png";
import phoenix from "../assets/flameStatic.png";
import flameAni from "../assets/flameAni.gif";
import cadence from "../assets/cadenceAni.gif";
import cadenceStatic from "../assets/cadenceStatic.png";
import montey from "../assets/monteyStatic.png";
import monteyAni from "../assets/monteyAni.gif";

const projects = [
  {
    id: 1,
    name: "AC Pixel Editor",
    description:
      "AC Pixel Editor is an in-browser custom style editor aimed to be compatible with Animal Crossing New Horizons.",
    pic: acEditor,
    demo: "https://xrysen.github.io/pixel-editor/",
    github: "https://github.com/xrysen/pixel-editor",
    techStack: "HTML, CSS, Javascript, jQuery",
  },
  {
    id: 2,
    name: "Matchr",
    description: "",
    pic: matchr,
    github: "https://github.com/xrysen/matcher"

  },
  {
    id: 3,
    name: "Matchr Mobile",
    description: "",
    pic: matchrMobile,
    github: "https://github.com/xrysen/matchr-mobile"
  },
  {
    id: 4,
    name: "Tadoo",
    pic: "https://github.com/xrysen/smart-to-do-list/raw/master/docs/active.png?raw=true",
    github: "https://github.com/xrysen/smart-to-do-list"
  }
];

const games = [
  {
    id: 1,
    name: "Cadence",
    status: "(In Development)",
    pic: cadence,
    static: cadenceStatic
  },
  {
    id: 2,
    name: "Amethyst",
    status: "(Demo)",
    pic: amethystAni,
    static: amethyst
  },
  {
    id: 3,
    name: "Rysen Ranch",
    status: "(Demo)",
    pic: rysenRanch,
    static: ranchStatic
  },
  {
    id: 4,
    name: "Phoenix Flame",
    status: "(48h Compo Entry)",
    pic: flameAni,
    static: phoenix
  },
  {
    id: 5,
    name: "Montey-The-Anything-But-Friendly-Shark",
    status: "(48h Compo Entry)",
    pic: monteyAni,
    static: montey
  }
]

export { projects, games };
