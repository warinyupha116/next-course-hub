"use client";

import { useState, type ChangeEvent } from "react";
import type { Course } from "@/type/course";
import CourseCard from "@/components/CourseCard";

type CourseExplorerProps = {
  courses?: Course[];
};

export default function CourseExplorer({ courses = [] }: CourseExplorerProps) {
  const [keyword, setKeyword] = useState<string>("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

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

  const searchText = keyword.trim().toLowerCase();
  const safeCourses = Array.isArray(courses) ? courses : [];
  const visibleCourses = safeCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchText) ||
      course.code.includes(searchText)
  );

  return (
    <div>
      <div>
        <input
          type="search"
          aria-label="ค้นหารายวิชา"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา"
        />
        <p>รายการโปรด: {favoriteIds.length} วิชา</p>
      </div>

      {visibleCourses.length === 0 ? (
        <p>ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
      ) : (
        <section>
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isFavorite={favoriteIds.includes(course.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </section>
      )}
    </div>
  );
}