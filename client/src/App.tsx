import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { socket } from "./socket/socket";

import Home from "./pages/Home";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import Lobby from "./pages/Lobby";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
        console.log("✅ Connected to server");
    });

    socket.on("disconnect", () => {
        console.log("❌ Disconnected");
    });

    return () => {
        socket.off("connect");
        socket.off("disconnect");
    };
}, []);
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/create" element={<CreateRoom />} />

        <Route path="/join" element={<JoinRoom />} />

        <Route path="/lobby" element={<Lobby />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;