import acEditor from "../assets/ac-pixel.png";
import matchr from "../assets/matchr.png";
import matchrMobile from "../assets/matchrMobile.png";
import amethyst from "../assets/amethyst.png";
import rysenRanch from "../assets/rysenRanch.png";
import phoenix from "../assets/phoenix.png";
import cadence from "../assets/cadenceAni.gif";
import cadenceStatic from "../assets/cadenceStatic.png";
import montey from "../assets/montey.png";

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
    pic: cadence,
    static: cadenceStatic
  },
  {
    id: 2,
    name: "Amethyst",
    pic: amethyst,
    static: ""
  },
  {
    id: 3,
    name: "Rysen Ranch",
    pic: rysenRanch,
    static: ""
  },
  {
    id: 4,
    name: "Phoenix Flame",
    pic: phoenix,
    static: ""
  },
  {
    id: 5,
    name: "Montey-The-Anything-But-Friendly-Shark",
    pic: montey,
    static: ""
  }
]

export { projects, games };
