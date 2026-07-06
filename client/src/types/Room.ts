import type { Player } from "./Player";

export type GameSettings = {
  maxPlayers: number;
  teams: number;
  teamMode: string;
  rounds: number;
  timeLimit: number;
};

export type Room = {
  code: string;
  players: Player[];
  spectators: number;
  settings: GameSettings;
};