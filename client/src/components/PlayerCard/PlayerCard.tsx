import "./PlayerCard.css";

type PlayerCardProps = {
  name: string;
  host: boolean;
  ready: boolean;
  team: number;
  onClick: () => void;
};

function PlayerCard({
  name,
  host,
  ready,
  team,
  onClick,
}: PlayerCardProps) {
  return (
    <div
      className={`player-card ${host ? "host" : ""}`}
      onClick={onClick}
    >
      <div className="player-top">
        <span className="player-name">
          {host ? "👑 " : "🙂 "}
          {name}
        </span>

        <span className={ready ? "ready" : "not-ready"}>
          {ready ? "🟢 Ready" : "⚪ Not Ready"}
        </span>
      </div>

      <div className="player-bottom">
        Team {team}
      </div>
    </div>
  );
}

export default PlayerCard;