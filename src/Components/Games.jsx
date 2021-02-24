import Game from "./Game";
import { games } from "../data/projects";
import "./Games.scss";

const Games = () => {
  const proj = games.map((project) => {
    return (
      <Game
        name={project.name}
        pic={project.static}
        description={project.description}
        techStack={project.techStack}
        ani = {project.pic}
      />
    );
  });

  return (
    <div className="game-container">
      {proj}
    </div>
  );
};

export default Games;