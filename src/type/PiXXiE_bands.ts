export interface Member {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface Band {
  id: number;
  name: string;
  genre: string;
  image: string;
  description: string;
  members: Member[];
}

export const PiXXiE_bands: Band = {
  id: 3,
  name: "PiXXiE",
  genre: "T-Pop",
  image: "/images/bands/pixxie.jpg",
  description: "PiXXiE เป็นเกิร์ลกรุ๊ป T-Pop มีสมาชิกทั้งหมด 3 คน",
  members: [
    {
      id: "1",
      name: "สุชาดา สอนพันธ์ (มาเบล)",
      role: "นักร้อง",
      avatar: "/images/bands/members/mabel.jpg"
    },
    {
      id: "2",
      name: "พิมพ์มาดา ใจเวชวัฒนา (พิมมา)",
      role: "นักร้อง",
      avatar: "/images/bands/members/pimma.jpg"
    },
    {
      id: "3",
      name: "อิงโกะ อินทร์ปาล (อิงโกะ)",
      role: "นักร้อง",
      avatar: "/images/bands/members/ingkho.jpg"
    }
  ]
};
