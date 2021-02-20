import "./App.scss";
import React, { useState } from "react";
import Brand from "./Components/Brand";
import Navbar from "./Components/Navbar";
import IntroPic from "./Components/IntroPic";
import IntroText from "./Components/IntroText";
import { AnimateOnChange } from "react-animation";

const INTRO = "INTRO";
const PROJECTS = "PROJECTS";
const GAMES = "GAMES";
const CONTACT = "CONTACT";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <div className="main-container">
      <Brand />
      <Navbar />
      <AnimateOnChange animation="fade">
        {mode === INTRO && (
          <>
            <IntroPic />
            <IntroText />
          </>
        )}
      </AnimateOnChange>
    </div>
  );
}

export default App;
