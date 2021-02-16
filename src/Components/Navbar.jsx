import React from "react";
import Name from "./Name";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="navbar">
      <Name />
      <Navigation />
    </div>
  )
}

export default Navbar;