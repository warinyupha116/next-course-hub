"use client";

import { useState } from "react";
import type { Game, GameDraft } from "@/type/game";
import GameForm from "@/components/GameForm";
import GameCard from "@/components/GameCard";

type GameExplorerProps = {
  initialGames: Game[];
};

export default function GameExplorer({ initialGames }: GameExplorerProps) {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [editingId, setEditingId] = useState<string | null>(null);

  // เพิ่มรายการใหม่
  function handleCreate(draft: GameDraft) {
    const newGame: Game = {
      id: crypto.randomUUID(),
      title: draft.title.trim(),
      platform: draft.platform.trim(),
      hours: Number(draft.hours),
      status: draft.status,
    };
    setGames([...games, newGame]);
  }

  // ลบรายการ
  function handleDelete(id: string) {
    setGames(games.filter((game) => game.id !== id));
  }

  // แก้ไขรายการ
  function handleUpdate(id: string, draft: GameDraft) {
    setGames(
      games.map((game) =>
        game.id === id
          ? {
              ...game,
              title: draft.title.trim(),
              platform: draft.platform.trim(),
              hours: Number(draft.hours),
              status: draft.status,
            }
          : game
      )
    );
    setEditingId(null);
  }

  function handleSave(draft: GameDraft) {
    if (editingId === null) {
      handleCreate(draft);
      return;
    }
    handleUpdate(editingId, draft);
  }

  const editingGame = games.find((game) => game.id === editingId);

  return (
    <div>
      <GameForm
        key={editingId ?? "new"}
        initialGame={editingGame}
        onSave={handleSave}
        onCancel={() => setEditingId(null)}
      />

      <hr />

      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onEdit={() => setEditingId(game.id)}
          onDelete={() => handleDelete(game.id)}
        />
      ))}
    </div>
  );
}