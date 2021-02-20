import "./App.scss";
import React, { useState } from "react";
import Brand from "./Components/Brand";
import Navbar from "./Components/Navbar";
import IntroPic from "./Components/IntroPic";
import IntroText from "./Components/IntroText";
import WebProjects from "./Components/WebProjects";
import Games from "./Components/Games";
import { AnimateOnChange } from "react-animation";
import { propTypes } from "react-bootstrap/esm/Image";

const INTRO = "INTRO";
const WEB = "WEB";
const GAMES = "GAMES";
const CONTACT = "CONTACT";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <div className="main-container">
      <Brand click = {()=> setMode(INTRO)} />
      <Navbar web = {()=> setMode(WEB)} games={()=> setMode(GAMES)} />
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
        {mode === GAMES && (
          <Games />
        )}
      </AnimateOnChange>
    </div>
  );
}

export default App;
