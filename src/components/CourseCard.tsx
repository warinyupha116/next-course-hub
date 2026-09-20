import Link from "next/link";
import type { Course } from "@/type/course";

type CourseCardProps = {
  course: Course;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string | number) => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function CourseCard({
  course,
  isFavorite,
  onToggleFavorite,
  onEdit,
  onDelete,
}: CourseCardProps) {
  return (
    <article>
      <h2>
        <Link href={`/courses/${course.id}`}>{course.name}</Link>
      </h2>
      <p>รหัสวิชา: {course.code}</p>
      <p>หน่วยกิต: {course.credit}</p>
      <p>ผู้สอน: {course.instructor}</p>

      {onToggleFavorite ? (
        <button
          type="button"
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(course.id)}
        >
          {isFavorite ? "อยู่ในรายการโปรด" : "เพิ่มเป็นรายการโปรด"}
        </button>
      ) : null}

      {onEdit ? (
        <button type="button" onClick={onEdit}>
          แก้ไข
        </button>
      ) : null}

      {onDelete ? (
        <button type="button" onClick={onDelete}>
          ลบ
        </button>
      ) : null}
    </article>
  );
}