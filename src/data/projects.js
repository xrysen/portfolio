import acEditor from "../assets/ac-pixel.png";
import amethyst from "../assets/amethystStatic.png";
import amethystAni from "../assets/amethystAni.gif";
import rysenRanch from "../assets/ranchAni.gif";
import ranchStatic from "../assets/ranchStatic.png";
import phoenix from "../assets/flameStatic.png";
import flameAni from "../assets/flameAni.gif";
import cadence from "../assets/cadenceAni.gif";
import cadenceStatic from "../assets/cadenceStatic.png";
import montey from "../assets/montey.png";
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
    pic: "https://github.com/xrysen/matcher/raw/master/client/public/matchr%20screenshots/match.png?raw=true",
    github: "https://github.com/xrysen/matcher",
    techStack: "React, React-Native, Typescript, SCSS, postgreSQL, Yelp Fusion API",
    description: "Matchr uses a clean, simple, familiar interface that lets both you and your partner swipe or click your way through highly rated restaurants in your local area, until you’ve both swiped YES on the same delightful establishment!"

  },
  {
    id: 3,
    name: "Tadoo",
    pic: "https://github.com/xrysen/smart-to-do-list/raw/master/docs/active.png?raw=true",
    github: "https://github.com/xrysen/smart-to-do-list",
    techStack: "HTML, SCSS, Javascript, jQuery, postgreSQL, Yelp Fusion API, Open Movie Database API, Google Books API",
    description: "Tadoo is a single page application that will take whatever task you enter and uses an algorithm based on API calls to sort it into one of four categories."
  }
];

const games = [
  {
    id: 1,
    name: "Cadence",
    status: "(In Development)",
    pic: cadence,
    static: cadenceStatic,
    description: "Cadence is an in development 16-bit jRPG with a musical theme"
  },
  {
    id: 2,
    name: "Amethyst",
    status: "(Demo)",
    pic: amethystAni,
    static: amethyst,
    description: "A short jRPG inspired by early SNES RPG's"
  },
  {
    id: 3,
    name: "Rysen Ranch",
    status: "(Demo)",
    pic: rysenRanch,
    static: ranchStatic,
    description: "A farming simulator where you grow crops, raise livestock with an interactive town full of characters"
  },
  {
    id: 4,
    name: "Phoenix Flame",
    status: "(48h Compo Entry)",
    pic: flameAni,
    static: phoenix,
    description: "The winner of a 48 hour game competition where the theme was 'The Colour Red'"
  },
  {
    id: 5,
    name: "Montey-The-Anything-But-Friendly-Shark",
    status: "(48h Compo Entry)",
    pic: monteyAni,
    static: montey,
    description: "A top-down, and side-view (depending on the level) 48 hour competition entry where the theme was the main player had to be a bad guy."
  }
]

export { projects, games };
