"use client";

import { useState } from 'react';
import Image from 'next/image';

export type Member = {
  id: number;
  name: string;
  fullName: string;
  role: string;
  avatar: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  description: string;
  image: string;
  members: Member[];
};

export type BandProps = {
  band: Band;
  isFavorite?: boolean;
  likes?: number;
  onToggleFavorite?: (id: number) => void;
  onLike?: (id: number) => void;
};

const bandsData: Band[] = [
  {
    id: 1,
    name: 'Cocktail',
    genre: 'Classic Rock',
    description: 'วงร็อกที่มีเอกลักษณ์ผสมผสานวงออร์เคสตรา',
    image: '/images/bands/cocktail.jpg',
    members: [
      { id: 1, name: 'โอม', fullName: 'ปัณฑพล ประสารราชกิจ', role: 'ร้องนำ', avatar: '/images/bands/members/ohm.jpg' },
      { id: 2, name: 'เชาว์', fullName: 'ชวรัตน์ หลิววโรพาส', role: 'กีตาร์', avatar: '/images/bands/members/chao.jpg' },
      { id: 3, name: 'ปาร์ค', fullName: 'เกริกเกียรติ สว่างวงศ์', role: 'เบส', avatar: '/images/bands/members/park.jpg' },
      { id: 4, name: 'ฟิลิปส์', fullName: 'ฟิลิปส์ เปรมสิริธร', role: 'กลอง', avatar: '/images/bands/members/philip.jpg' },
    ],
  },
  {
    id: 2,
    name: 'Tilly Birds',
    genre: 'Alternative Rock',
    description: 'วงออลเทอร์นาทีฟร็อกเจ้าของเพลงฮิตติดหูมากมาย',
    image: '/images/bands/tillybirds.jpg',
    members: [
      { id: 1, name: 'เติร์ด', fullName: 'อนุโรจน์ เกตุเลขา', role: 'ร้องนำ', avatar: '/images/bands/members/third.webp' },
      { id: 2, name: 'บิลลี่', fullName: 'ณัฐดนัย ชูชาติ', role: 'กีตาร์ / โปรดิวเซอร์', avatar: '/images/bands/members/billy.jpg' },
      { id: 3, name: 'ไมโล', fullName: 'ธุวานนท์ ตันติโชติ', role: 'กลอง', avatar: '/images/bands/members/milo.jpg' },
    ],
  },
  {
    id: 3,
    name: 'PiXXiE',
    genre: 'T-Pop',
    description: 'วงเกิร์ลกรุ๊ป T-Pop คุณภาพที่มีเสน่ห์และความสามารถโดดเด่น',
    image: '/images/bands/pixxie.jpg',
    members: [
      { id: 1, name: 'มาเบล', fullName: 'สุชาดา สอนพันธ์', role: 'ร้องหลัก / ภาพลักษณ์วง', avatar: '/images/bands/members/mabel2.jpg' },
      { id: 2, name: 'พิมมา', fullName: 'พิมพ์มาดา ใจพันธ์', role: 'เต้นหลัก / แร็ปหลัก', avatar: '/images/bands/members/pimma.jpg' },
      { id: 3, name: 'อิงโกะ', fullName: 'อินท์ปาลี โชติหิรัญธนนนท์', role: 'ร้องเสียงหลัก', avatar: '/images/bands/members/ingkho.jpg' },
    ],
  },
];

function BandCard({
  band,
  isFavorite = false,
  likes = 0,
  onToggleFavorite,
  onLike,
}: BandProps) {
  return (
    <article className="band-card">
      <div className="band-image">
        <Image
          src={band.image}
          alt={band.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="image-overlay" />
        <span className="band-number">
          #{String(band.id).padStart(2, '0')}
        </span>
      </div>

      <div className="band-content">
        <div className="band-heading">
          <div>
            <span className="band-badge">{band.genre}</span>
            <h2>{band.name}</h2>
          </div>
          <button
            type="button"
            className="heart"
            onClick={() => onToggleFavorite?.(band.id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isFavorite ? '#ff4d4f' : 'inherit',
            }}
          >
            {isFavorite ? '♥' : '♡'}
          </button>
        </div>

        <p className="description">{band.description}</p>

        <div className="like-section" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '12px 0' }}>
          <button
            type="button"
            className="like-button"
            onClick={() => onLike?.(band.id)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            ❤️ กดใจ
          </button>
          <span className="like-count" style={{ fontSize: '0.9rem', color: '#666' }}>
            {likes} Like{likes !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="members-section">
          <div className="members-title">
            <span>MEMBERS</span>
            <span className="member-count">{band.members.length} คน</span>
          </div>

          <div className="member-table">
            {band.members.map((member) => (
              <div className="member-row" key={member.id}>
                <div className="member-info">
                  <div className="member-avatar">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="52px"
                    />
                  </div>
                  <div className="member-text">
                    <div className="member-name">{member.name}</div>
                    <div className="member-fullname">{member.fullName}</div>
                  </div>
                </div>
                <span className="member-role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BandsPage() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [likesMap, setLikesMap] = useState<Record<number, number>>({});
  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleToggleFavorite(id: number) {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  function handleLike(id: number) {
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

 
  const filteredBands = bandsData.filter((band) =>
    band.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    band.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bands-page">
      <section className="page-header">
        <div className="small-title">♡ MY MUSIC COLLECTION</div>
        <h1>วงดนตรีที่ชื่นชอบ</h1>
        <p>Favorite Bands (รายการโปรด {favoriteIds.length} วง)</p>

        <div style={{ marginTop: '16px', marginBottom: '8px' }}>
          <input
            type="text"
            placeholder="ค้นหาชื่อวงดนตรี "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '10px 16px',
              borderRadius: '20px',
              border: '1px solid #ddd',
              width: '100%',
              maxWidth: '320px',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        <div className="pink-line" />
      </section>

    
      <section className="band-grid">
        {filteredBands.length > 0 ? (
          filteredBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFavorite={favoriteIds.includes(band.id)}
              likes={likesMap[band.id] || 0}
              onToggleFavorite={handleToggleFavorite}
              onLike={handleLike}
            />
          ))
        ) : (
          <div
            className="empty-state"
            style={{
              textAlign: "center",
              padding: "40px 20px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              border: "1px solid #eee",
              margin: "20px auto",
              maxWidth: "400px",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🔍</div>
            <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>
              ไม่พบข้อมูลวงดนตรี
            </h3>
            <p style={{ margin: 0, color: "#777", fontSize: "0.9rem" }}>
              ไม่พบวงดนตรีหรือแนวเพลงที่ตรงกับคำว่า &quot;{searchTerm}&quot;
            </p>
          </div>
        )}
      </section>
    </main>
  );
}