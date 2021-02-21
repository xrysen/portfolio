import "./App.scss";
import React, { useState } from "react";
import me from "./assets/me.jpg";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Games from "./Components/Games";
import { AnimateOnChange, HideUntilLoaded } from "react-animation";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import WebProjects from "./Components/WebProjects";

const HOME = "HOME";
const WEB = "WEB";
const GAMES = "GAMES";

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
          <Typography variant="h6" onClick={() => setView(HOME)}>
            Sean Oyler
          </Typography>
          <Typography color="inherit">
            <Nav web={() => setView(WEB)} games={()=> setView(GAMES)}/>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="top-background"></div>
      <div className="bottom-background"></div>
      <AnimateOnChange animation="fade" durationOut={500}>
        {view === HOME && (
          <HideUntilLoaded imageToLoad={me}>
            <div className="content-container">
              <img src={me} alt="profile" className="profile-pic" />
              <About web={() => setView(WEB)} />
            </div>
          </HideUntilLoaded>
        )}
        {view === WEB && <WebProjects />}
        {view === GAMES && <Games />}
      </AnimateOnChange>
    </>
  );
}

export default App;
