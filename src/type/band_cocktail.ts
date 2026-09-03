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

export const band_cocktail: Band = {
  id: 1,
  name: "Cocktail",
  genre: "Rock / Classic Rock",
  image: "/images/bands/cocktail.jpg",
  description: "Cocktail เป็นวงดนตรีร็อกสัญชาติไทยที่มีเอกลักษณ์เฉพาะตัวในการผสมผสานดนตรีคลาสสิก",
  members: [
    {
      id: "1",
      name: "ปัณฑพล ประสารราชกิจ (โอม)",
      role: "นักร้องนำ",
      avatar: "/images/bands/members/ohm.jpg"
    },
    {
      id: "2",
      name: "ชวรัตน์ หร่วันช์ (เชา)",
      role: "มือกีตาร์",
      avatar: "/images/bands/members/chao.jpg"
    },
    {
      id: "3",
      name: "เกริกเกียรติ สว่างวงศ์ (ปาร์ค)",
      role: "มือเบส",
      avatar: "/images/bands/members/park.jpg"
    },
    {
      id: "4",
      name: "ฟิลิปส์ เปรมสิริกรณ์ (ฟิลิป)",
      role: "มือกลอง",
      avatar: "/images/bands/members/philip.jpg"
    }
  ]
};