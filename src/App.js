import "./App.scss";
import React, { useState } from "react";
import Brand from "./Components/Brand";
import Navbar from "./Components/Navbar";
import IntroPic from "./Components/IntroPic";
import IntroText from "./Components/IntroText";
import WebProjects from "./Components/WebProjects";
import { AnimateOnChange } from "react-animation";

const INTRO = "INTRO";
const WEB = "WEB";
const GAMES = "GAMES";
const CONTACT = "CONTACT";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <div className="main-container">
      <Brand click = {()=> setMode(INTRO)} />
      <Navbar web = {()=> setMode(WEB)} />
      <AnimateOnChange animation="fade" duration="1000">
        {mode === INTRO && (
          <>
            <IntroPic />
            <IntroText web = {()=> setMode(WEB)}/>
          </>
        )}
        {mode === WEB && (
          <WebProjects />
        )}
      </AnimateOnChange>
    </div>
  );
}

export default App;
