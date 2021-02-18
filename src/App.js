import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import IntroPic from "./Components/IntroPic";
import Projects from "./Components/Projects";
import { AnimateOnChange } from "react-animation";

const INTRO = "INTRO";
const PROJECTS = "Projects";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <div className="container">
      <Navbar
        onClick={() => setMode(PROJECTS)}
        about={() => setMode(INTRO)}
        intro={() => setMode(INTRO)}
      />
      <AnimateOnChange
        animationIn="fadeIn"
        animationOut="fadeOut"
        durationOut={200}
      >
        {mode === INTRO && (
          <div className="intro-container">
            <Intro onClick={() => setMode(PROJECTS)} />
            <IntroPic />
          </div>
        )}
        {mode === PROJECTS && (
          <div className="projects-container">
            <Projects />
          </div>
        )}
      </AnimateOnChange>
    </div>
  );
}

export default App;
