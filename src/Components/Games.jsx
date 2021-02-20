import "./Games.scss";
import { games } from "../data/projects";

const Games = () => {
  const allGames = games.map((games, i) => {
    return (
      <div key={i}>
        <h4 className = "game-title" onClick={()=> window.open(games.pic)}>{games.name}</h4>
        <img src = {games.static} alt={games.name} className="game-image" />
        <p>{games.status}</p>
      </div>
    )
  })

  return (
    <div className="game-container">
      <h2>Games</h2>
      {allGames}
    </div>
  );
};

export default Games;