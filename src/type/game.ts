export type GameStatus = "ยังไม่เริ่ม" | "กำลังเล่น" | "เล่นจบแล้ว";

export type Game = {
  id: string;
  title: string;
  platform: string;
  hours: number;
  status: GameStatus;
};


export type GameDraft = {
  title: string;
  platform: string;
  hours: string;
  status: GameStatus;
};