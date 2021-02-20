import "./App.scss";
import React, { useState } from "react";
import Brand from "./Components/Brand";
import Navbar from "./Components/Navbar";

const INTRO = "INTRO";
const PROJECTS = "PROJECTS";
const GAMES = "GAMES";
const CONTACT = "CONTACT";

function App() {
  const [mode, setMode] = useState(INTRO);
  return (
    <div className = "main-container">
      <Brand />
      <Navbar />
    </div>
  )
}

export default App;
