import type { Metadata } from "next";
import { games } from "@/app/data/games";
import GameExplorer from "@/components/GameExplorer";

export const metadata: Metadata = {
  title: "Game Backlog - รายการเกมทั้งหมด",
};

export default function GamesPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Game Backlog</h1>
      <GameExplorer initialGames={games} />
    </main>
  );
}