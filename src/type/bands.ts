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
