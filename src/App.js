import "./App.scss";
import React, { useState } from "react";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";

import { AppBar, Toolbar, Typography } from "@material-ui/core";


function App() {
  

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
          <Typography variant="h6" >
            Sean Oyler
          </Typography>
          <Typography color="inherit">
            <Nav />
          </Typography>
        </Toolbar>
      </AppBar>
      <Intro />
    </>
  );
}

export default App;
