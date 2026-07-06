import { Link } from "react-router-dom";
import "./JoinRoom.css";

function JoinRoom() {
  return (
    <div className="join-room">
      <div className="card">
        <h1>Join Room</h1>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="text"
          placeholder="Room Code"
        />

        <button>Join</button>

        <Link to="/">
          <button className="back">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JoinRoom;