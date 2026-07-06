import { createContext, useContext, useState } from "react";
import type { Room } from "../types/Room";

type RoomContextType = {
  room: Room | null;
  setRoom: React.Dispatch<React.SetStateAction<Room | null>>;
};

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export function RoomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [room, setRoom] = useState<Room | null>(null);

  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
}

export function useRoom() {
  const context = useContext(RoomContext);

  if (!context) {
    throw new Error("useRoom must be used inside RoomProvider");
  }

  return context;
}