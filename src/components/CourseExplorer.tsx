"use client";

import { useState, type ChangeEvent } from "react";
import type { Course } from "@/type/course";
import CourseCard from "@/components/CourseCard";

type CourseExplorerProps = {
  courses?: Course[];
};

export default function CourseExplorer({ courses = [] }: CourseExplorerProps) {
  const [keyword, setKeyword] = useState<string>(""); //ค้นหา
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]); //id ที่ชอบ

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  //ค้นหา Derived State คำนวณผลลัพธ์การค้นหารายวิชา
  function handleToggleFavorite(id: number) {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id) //includesชอบ
        ? prevIds.filter((favoriteId) => favoriteId !== id) //filterลบรายการที่กด
        : [...prevIds, id]
    );
  }

  const searchText = keyword.trim().toLowerCase();
  const safeCourses = Array.isArray(courses) ? courses : [];
  const visibleCourses = safeCourses.filter(
    //visibleCourses เช็คตัวที่มีในคำค้นหา
    (course) =>
      ((course as { title?: string }).title || course.name).toLowerCase().includes(searchText) ||
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
              isFavorite={favoriteIds.includes(Number(course.id))}
              onToggleFavorite={(id) => handleToggleFavorite(Number(id))}
            />
          ))}
        </section>
      )}
    </div>
  );
}