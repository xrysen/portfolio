import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import IntroPic from "./Components/IntroPic";
import { AnimateOnChange } from "react-animation";

const INTRO = "INTRO";
const PORTFOLIO = "PORTFOLIO";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <div className="container">
      <Navbar onClick={() => setMode(PORTFOLIO)} />
      <AnimateOnChange animationIn="fadeIn" animationOut="fadeOut" durationOut={200}>
        {mode === INTRO && (
          <div className="intro-container">
            <Intro onClick={() => setMode(PORTFOLIO)} />
            <IntroPic />
          </div>
        )}
        {mode === PORTFOLIO && (
          <div>
            <h1>Portfolio</h1>
            <button onClick={()=> setMode(INTRO)}>Back</button>
          </div>
        )}
      </AnimateOnChange>
    </div>
  );
}

export default App;
