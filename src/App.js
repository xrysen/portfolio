import "./App.scss";
import React, { useState } from "react";
import Intro from "./Components/Intro";
import WebProjects from "./Components/WebProjects";
import About from "./Components/About";
import Nav from "./Components/Nav";
import { AnimateOnChange } from "react-animation";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const INTRO = "INTRO";
const WEB = "WEB";
const ABOUT = "ABOUT";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgba(30, 108, 217, 0.8)" }}
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" onClick={()=> setMode(INTRO)} className="brand">Sean Oyler</Typography>
          <Typography color="inherit">
            <Nav web = {()=> setMode(WEB)} about = {()=> setMode(ABOUT)} />
          </Typography>
        </Toolbar>
      </AppBar>
      <AnimateOnChange>
        {mode === INTRO && <Intro click = {()=> setMode(ABOUT)} />}
        {mode === WEB && <WebProjects /> }
        {mode === ABOUT && <About /> }
      </AnimateOnChange>
    </>
  );
}

export default App;
