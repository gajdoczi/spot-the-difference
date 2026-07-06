import "./Lobby.css";

function Lobby() {
  return (
    <div className="lobby">

      <div className="lobby-card">

        <h1>Lobby</h1>

        <div className="room-code">

          <span>Szobakód</span>

          <div className="code">
            ABCD12
          </div>

        </div>

        <div className="players">

          <h2>Játékosok</h2>

          <div className="player host">
            👑 Krisztián (Host)
          </div>

          <div className="player">
            😀 Peti
          </div>

          <div className="player">
            😀 Dani
          </div>

          <div className="player waiting">
            Várakozás...
          </div>

          <div className="player waiting">
            Várakozás...
          </div>

        </div>

        <div className="footer">

          <span>Játékosok: 3 / 10</span>

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