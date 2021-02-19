import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import IntroPic from "./Components/IntroPic";
import Projects from "./Components/Projects";
import Games from "./Components/Games";
import Contact from "./Components/Contact";
import { AnimateOnChange } from "react-animation";
import { Box, Container } from "@material-ui/core";

const INTRO = "INTRO";
const PROJECTS = "PROJECTS";
const GAMES = "GAMES";
const CONTACT = "CONTACT";

const App = () => {
  return (
    <Container maxWidth="lg" className="container">
      <Navbar />
    </Container>
  )
};

// function App() {
//   const [mode, setMode] = useState(INTRO);
//   return (
//     <>
//           <Navbar
//             onClick={() => setMode(PROJECTS)}
//             about={() => setMode(INTRO)}
//             intro={() => setMode(INTRO)}
//             games={() => setMode(GAMES)}
//             contact={() => setMode(CONTACT)}
//           />
//       <AnimateOnChange
//         animationIn="fadeIn"
//         animationOut="fadeOut"
//         durationOut={200}
//       >
//         {mode === INTRO && (
//           <div className="intro-container">
//             <Intro web={() => setMode(PROJECTS)} games={() => setMode(GAMES)} />
//             <IntroPic />
//           </div>
//         )}
//         {mode === PROJECTS && (
//           <div className="projects-container">
//             <Projects />
//           </div>
//         )}
//         {mode === GAMES && (
//           <div className="projects-container">
//             <Games />
//           </div>
//         )}
//         {mode === CONTACT && (
//           <div className="projects-container">
//             <Contact />
//           </div>
//         )}
//       </AnimateOnChange>
//     </>
//   );
// }

export default App;
