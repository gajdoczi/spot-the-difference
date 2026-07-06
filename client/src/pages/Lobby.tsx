import "./Lobby.css";
import RoomCode from "../components/RoomCode/RoomCode";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import GameSettings from "../components/GameSettings/GameSettings";
import type { Room } from "../types/Room";

function Lobby() {
  const room: Room = {
  code: "ABCD12",

  spectators: 0,

  settings: {
    maxPlayers: 10,
    teams: 2,
    teamMode: "Custom",
    rounds: 10,
    timeLimit: 60,
  },

  players: [
    {
      id: 1,
      name: "Krisztián",
      host: true,
    },
    {
      id: 2,
      name: "Peti",
      host: false,
    },
    {
      id: 3,
      name: "Dani",
      host: false,
    },
  ],
};

  return (
    <div className="lobby">
      <div className="lobby-card">
        <h1>Lobby</h1>

        <RoomCode code={room.code} />

        <GameSettings
    maxPlayers={room.settings.maxPlayers}
teams={room.settings.teams}
teamMode={room.settings.teamMode}
rounds={room.settings.rounds}
timeLimit={room.settings.timeLimit}
/>

        <div className="players">
          <h2>Játékosok</h2>

          {room.players.map((player) => (
  <PlayerCard
    key={player.id}
    name={player.name}
    host={player.host}
  />
))}

          {Array.from({
  length: room.settings.maxPlayers - room.players.length,
}).map((_, index) => (
            <div
              key={`waiting-${index}`}
              className="player waiting"
            >
              Várakozás...
            </div>
          ))}
        </div>

        <div className="footer">
  <span>
    Játékosok: {room.players.length} / {room.settings.maxPlayers}
  </span>

  <span>
    Nézők: {room.spectators}
  </span>
</div>

        <div className="buttons">
          <button>⚙ Beállítások</button>

          <button>▶ Játék indítása</button>

          <button className="leave">
            🚪 Kilépés
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lobby;