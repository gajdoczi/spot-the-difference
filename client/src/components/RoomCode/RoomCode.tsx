import "./RoomCode.css";

type RoomCodeProps = {
  code: string;
};

function RoomCode({ code }: RoomCodeProps) {
  async function copyCode() {
    await navigator.clipboard.writeText(code);
    alert("Room code copied!");
  }

  return (
    <div className="room-code-card">

      <h3>Room Code</h3>

      <div className="room-code-value">
        {code}
      </div>

      <button
        className="copy-button"
        onClick={copyCode}
      >
        📋 Copy
      </button>

    </div>
  );
}

export default RoomCode;