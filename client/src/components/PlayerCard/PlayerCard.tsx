import "./PlayerCard.css";

type PlayerCardProps = {
  name: string;
  host: boolean;
};

function PlayerCard({ name, host }: PlayerCardProps) {
  return (
    <div className={`player-card ${host ? "host" : ""}`}>
      {host ? "👑" : "😀"} {name}
      {host && " (Host)"}
    </div>
  );
}

export default PlayerCard;