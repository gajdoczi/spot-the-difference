import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./CreateRoom.css";

import { socket } from "../socket/socket";
import { useRoom } from "../contexts/RoomContext";

import type { Room } from "../types/Room";

function CreateRoom() {
  const navigate = useNavigate();
  const { setRoom } = useRoom();

  const [roomName, setRoomName] = useState("");
  const [playerName, setPlayerName] = useState("");

  function createRoom() {
  socket.emit("create-room", {
    roomName,
    playerName,
    maxPlayers: 10,
  });

  socket.once("room-created", (room: Room) => {
    console.log("Room received:", room);

    setRoom(room);

    navigate("/lobby");
  });
}

  return (
    <div className="create-room">
      <div className="card">
        <h1>Create Room</h1>

        <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Your Name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />

        <select>
          <option>5 Players</option>
          <option>10 Players</option>
          <option>20 Players</option>
        </select>

        <button onClick={createRoom}>
          Create
        </button>

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