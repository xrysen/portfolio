import acEditor from "../assets/ac-pixel.png";
import matchr from "../assets/matchr.png";

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
    pic: "https://github.com/xrysen/matchr-mobile/raw/master/docs/ss6.png?raw=true",
    github: "https://github.com/xrysen/matchr-mobile"
  },
  {
    id: 4,
    name: "Tadoo",
    pic: "https://github.com/xrysen/smart-to-do-list/raw/master/docs/active.png?raw=true",
    github: "https://github.com/xrysen/smart-to-do-list"
  }
];

export { projects };
