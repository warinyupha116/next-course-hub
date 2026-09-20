import CourseExplorer from "@/components/CourseExplorer";
import type { Course } from "../../type/course";

const coursesData: Course[] = [
  { id: 1, code: "10301231", name: "เว็บเทคโนโลยี", credit: 3, instructor: "-" },
  { id: 2, code: "10301202", name: "โครงสร้างข้อมูล", credit: 3, instructor: "-" },
  { id: 3, code: "10301245", name: "ระบบฐานข้อมูล", credit: 3, instructor: "-" },
  { id: 4, code: "10301321", name: "วิศวกรรมซอฟต์แวร์", credit: 3, instructor: "-" },
];

export default function CoursePage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">ระบบค้นหารายวิชา</h1>

      <CourseExplorer courses={coursesData} />
    </main>
  );
}