import { games } from "../data/projects";
import Game from "./Game";
import "./Games.scss";

const Games = () => {
  const allGames = games.map((game, i) => {
    return <Game key={i} name={game.name} pic={game.pic} />;
  });

  return (
    <div className="game-projects">
      <h1>Games</h1>
      {allGames}
    </div>
  );
};

export default Games;
