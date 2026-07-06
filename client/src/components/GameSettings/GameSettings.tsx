import "./GameSettings.css";

type GameSettingsProps = {
  maxPlayers: number;
  teams: number;
  teamMode: string;
  rounds: number;
  timeLimit: number;
};

function GameSettings({
  maxPlayers,
  teams,
  teamMode,
  rounds,
  timeLimit,
}: GameSettingsProps) {
  return (
    <div className="settings-card">

      <h2>⚙ Game Settings</h2>

      <div className="setting">
        <span>Max Players</span>
        <span>{maxPlayers}</span>
      </div>

      <div className="setting">
        <span>Teams</span>
        <span>{teams}</span>
      </div>

      <div className="setting">
        <span>Team Mode</span>
        <span>{teamMode}</span>
      </div>

      <div className="setting">
        <span>Rounds</span>
        <span>{rounds}</span>
      </div>

      <div className="setting">
        <span>Time Limit</span>
        <span>{timeLimit} sec</span>
      </div>

    </div>
  );
}

export default GameSettings;