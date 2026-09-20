import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { games } from "@/app/data/games";

type GamePageProps = {
  params: Promise<{ id: string }>;
};

// สร้าง Metadata ของหน้าตามข้อมูลจริง
export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { id } = await params;
  const game = games.find((item) => item.id === id);

  return {
    title: game ? game.title : "ไม่พบรายการเกม",
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params;
  const game = games.find((item) => item.id === id);

  // สั่งให้แสดงหน้า 404 เมื่อไม่พบข้อมูล
  if (!game) {
    notFound();
  }

  return (
    <article style={{ padding: "20px" }}>
      <h1>{game.title}</h1>
      <p><strong>แพลตฟอร์ม:</strong> {game.platform}</p>
      <p><strong>จำนวนชั่วโมงที่คาดว่าจะใช้:</strong> {game.hours} ชั่วโมง</p>
      <p><strong>สถานะ:</strong> {game.status}</p>
    </article>
  );
}