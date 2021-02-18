import React from "react";

const Game = (props) => {
  return (
    <div className="project-item">
      <h3 className="project-name">{props.name}</h3>
      <img src={props.pic} alt={props.name} className="game-image" onClick={()=> window.open(props.pic)}
      />
    </div>
  )
}

export default Game;