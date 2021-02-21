import "./App.scss";
import React, { useState } from "react";
import me from "./assets/me.jpg";
import About from "./Components/About";
import Nav from "./Components/Nav";
import { AnimateOnChange } from "react-animation";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import WebProjects from "./Components/WebProjects";

const HOME = "HOME";
const WEB = "WEB";
const GAMES = "GAMES";
const ABOUT = "ABOUT";

function App() {
  const [view, setView] = useState(HOME);

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
          <Typography variant="h6">Sean Oyler</Typography>
          <Typography color="inherit">
            <Nav />
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="top-background"></div>
      <div className="bottom-background"></div>
      <AnimateOnChange animation="fade">
          {view === HOME && (
        <>
        <div className="content-container">
            
              <img src={me} alt="profile" className="profile-pic" />
              <About web={()=> setView(WEB)}/>
          </div>
          </>
          )}
          {view === WEB && (
            <WebProjects />
          )}
      </AnimateOnChange>
    </>
  );
}

export default App;
