import Link from "next/link";
import type { Game } from "@/type/game";

type GameCardProps = {
  game: Game;
  onEdit: () => void;
  onDelete: () => void;
};

export default function GameCard({ game, onEdit, onDelete }: GameCardProps) {
  return (
    <article style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
      <h2>
        <Link href={`/games/${game.id}`}>{game.title}</Link>
      </h2>
      <p>แพลตฟอร์ม: {game.platform}</p>
      <p>ชั่วโมงที่คาดว่าจะใช้: {game.hours} ชั่วโมง</p>
      <p>สถานะ: {game.status}</p>
      <button type="button" onClick={onEdit}>
        แก้ไข
      </button>
      <button type="button" onClick={onDelete}>
        ลบ
      </button>
    </article>
  );
}