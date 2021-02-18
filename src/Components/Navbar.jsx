import React from "react";
import Name from "./Name";
import Navigation from "./Navigation";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Name />
      <Navigation onClick = {props.onClick} about = {props.about} intro = {props.intro} games = {props.games} />
    </div>
  )
}

export default Navbar;