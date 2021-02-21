import "./App.scss";
import React from "react";
import me from "./assets/me.jpg";
import About from "./Components/About";
import Nav from "./Components/Nav";
import {AppBar, Toolbar, Button, Typography } from "@material-ui/core";

function App() {
  return (
    <>
    <AppBar position="fixed" style={{backgroundColor: "rgba(30, 108, 217, 0.8)"}}>
      <Toolbar style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Typography variant="h6">
          Sean Oyler
        </Typography>
        <Typography color="inherit">
          <Nav />
        </Typography>
      </Toolbar>
    </AppBar>
    <div className = "top-background">
    </div>
    <div className = "bottom-background"></div>
    <div className = "content-container">
      <img src = {me} alt = "profile" className = "profile-pic" />
      <About />
    </div>
    </>
  );
}

export default App;
