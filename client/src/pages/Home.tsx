import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <div className="background"></div>

      <div className="menu">

        <h1>Spot The Difference</h1>

        <h2>Multiplayer Online Party Game</h2>

        <div className="buttons">

          <Link to="/create">
    <Button text="Create Room" />
</Link>

<Link to="/join">
    <Button text="Join Room" />
</Link>

          <button disabled>Settings (Coming Soon)</button>

        </div>

        <div className="version">
          Version 0.1 Alpha
        </div>

      </div>

    </div>
  );
}

export default Home;