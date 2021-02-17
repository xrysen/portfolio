import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import IntroPic from "./Components/IntroPic";
import { AnimateOnChange } from "react-animation";
import useVisualMode from "./Hooks/useVisualMode";

const INTRO = "INTRO";
const PORTFOLIO = "PORTFOLIO";

function App() {
  const { mode, transition, back } = useVisualMode(INTRO);

  return (
    <div className="container">
      <Navbar portfolio={()=> transition(PORTFOLIO)} />
      <AnimateOnChange animationIn="fadeInUp" durationOut={500}>
      {mode === INTRO && (
          <div className = "intro-container">
            <Intro onClick={() => transition(PORTFOLIO)} />
            <IntroPic />
          </div>
      )}
      {mode === PORTFOLIO && (
          <div>
            <h1>Portfolio</h1>
          </div>
      )}
      </AnimateOnChange>
    </div>
  );
}

export default App;
