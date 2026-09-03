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

export const band_Tilly_Birds: Band = {
  id: 2,
  name: "Tilly Birds",
  genre: "Alternative Pop / Rock",
  image: "/images/bands/tillybirds.jpg",
  description: "วงดนตรีรุ่นใหม่ สร้างอารมณ์ดนตรีมาได้อย่างลึกซึ้ง",
  members: [
    {
      id: "1",
      name: "อนุพงศ์ วงศ์ขจร (เติร์ด)",
      role: "นักร้องนำ",
      avatar: "/images/bands/members/third.webp"
    },
    {
      id: "2",
      name: "ณัฐดนัย ชูชาติ (บิลลี่)",
      role: "มือกีตาร์",
      avatar: "/images/bands/members/billy.webp"
    },
    {
      id: "3",
      name: "ธุวานนท์ ตันติเวชกุล (ไมโล)",
      role: "มือกลอง",
      avatar: "/images/bands/members/milo.jpg"
    }
  ]
};
