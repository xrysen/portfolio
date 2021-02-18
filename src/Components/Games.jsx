import React from "react";
import Game from "./Game";
import { games } from "../data/projects";

const Games = () => {
  const list = games.map((game) => {
    return <Game key={game.id} name={game.name} pic={game.pic} static = {game.static} />;
  });

  return (
    <div>
      <h1>Game Projects</h1>
      <div className="projects-preview">{list}</div>
    </div>
  );
};

export default Games;
