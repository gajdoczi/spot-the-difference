import { Link } from "react-router-dom";
import "./CreateRoom.css";

function CreateRoom() {
  return (
    <div className="create-room">
      <div className="card">
        <h1>Create Room</h1>

        <input
          type="text"
          placeholder="Room Name"
        />

        <input
          type="text"
          placeholder="Your Name"
        />

        <select>
          <option>5 Players</option>
          <option>10 Players</option>
          <option>20 Players</option>
        </select>

        <button>Create</button>

        <Link to="/">
          <button className="back">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CreateRoom;