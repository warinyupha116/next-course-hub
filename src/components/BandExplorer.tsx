"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "../type/bands";
import BandCard from "@/components/BandCard";

type BandExplorerProps = {
  bands?: Band[];
};

export default function BandExplorer({ bands = [] }: BandExplorerProps) {
  const [keyword, setKeyword] = useState<string>("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [likesMap, setLikesMap] = useState<Record<number, number>>({});

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFavorite(id: number) {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((favoriteId) => favoriteId !== id)
        : [...prevIds, id]
    );
  }

  function handleLike(id: number) {
    setLikesMap((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  }

  function handleReset() {
    setKeyword("");
  }

  const searchText = keyword.trim().toLowerCase();
  const safeBands = Array.isArray(bands) ? bands : [];
  const visibleBands = safeBands.filter((band) =>
    band.name.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <div>
        <input
          type="search"
          aria-label="ค้นหาชื่อวงดนตรี"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวงดนตรี..."
        />
        {keyword && (
          <button type="button" onClick={handleReset}>
            ล้างเงื่อนไข
          </button>
        )}
        <p>กำลังติดตาม: {favoriteIds.length} วง</p>
      </div>

      {visibleBands.length === 0 ? (
        <p>ไม่พบวงดนตรีที่ตรงกับเงื่อนไข</p>
      ) : (
        <section>
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowing={favoriteIds.includes(band.id)}
              likes={likesMap[band.id] || 0}
              onToggleFollow={handleToggleFavorite}
              onLike={handleLike}
            />
          ))}
        </section>
      )}
    </div>
  );
}