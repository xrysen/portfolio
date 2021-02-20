import "./App.scss";
import React from "react";
import me from "./assets/me.jpg";
import About from "./Components/About";

function App() {
  return (
    <>
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
