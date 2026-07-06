import "./Lobby.css";
import RoomCode from "../components/RoomCode/RoomCode";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import GameSettings from "../components/GameSettings/GameSettings";

function Lobby() {
  const players = [
    { id: 1, name: "Krisztián", host: true },
    { id: 2, name: "Peti", host: false },
    { id: 3, name: "Dani", host: false }
  ];

  return (
    <div className="lobby">
      <div className="lobby-card">
        <h1>Lobby</h1>

        <RoomCode code="ABCD12" />

        <GameSettings
    maxPlayers={10}
    teams={2}
    teamMode="Custom"
    rounds={10}
    timeLimit={60}
/>

        <div className="players">
          <h2>Játékosok</h2>

          {players.map((player) => (
  <PlayerCard
    key={player.id}
    name={player.name}
    host={player.host}
  />
))}

          {Array.from({ length: 10 - players.length }).map((_, index) => (
            <div
              key={`waiting-${index}`}
              className="player waiting"
            >
              Várakozás...
            </div>
          ))}
        </div>

        <div className="footer">
          <span>Játékosok: {players.length} / 10</span>

          <span>Nézők: 0</span>
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