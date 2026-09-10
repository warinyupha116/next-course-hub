import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "หน้าแรก | Student Course Hub",
};

export default function HomePage() {
  const siteName: string = "Student Course Hub";
  const description: string = "แพลตฟอร์มศูนย์รวมข้อมูลรายวิชาและการลงทะเบียนสำหรับนักศึกษาและอาจารย์";

  return (
    <main className="page" style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* ส่วนหัวต้อนรับ */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '30px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #e9ecef' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '10px' }}>{siteName}</h1>
        <p style={{ fontSize: '1.1rem', color: '#6c757d', marginBottom: '20px' }}>{description}</p>
        
        <Link 
          href="/courses" 
          style={{ 
            display: 'inline-block', 
            background: '#0070f3', 
            color: 'white', 
            padding: '12px 24px', 
            borderRadius: '6px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          🔍 ไปที่หน้ารายวิชาทั้งหมด
        </Link>
      </div>

      {/* ฟีเจอร์เด่นในเว็บไซต์ */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}>
          <h3 style={{ color: '#0070f3', marginBottom: '10px' }}>⚡ ค้นหารวดเร็ว</h3>
          <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>ค้นหารหัสวิชาหรือชื่อวิชาได้อย่างแม่นยำและเรียลไทม์ผ่านระบบ Course Explorer</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}>
          <h3 style={{ color: '#0070f3', marginBottom: '10px' }}>⭐ จัดการรายการโปรด</h3>
          <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>กดบันทึกรายวิชาที่สนใจเพื่อวางแผนการลงทะเบียนในแต่ละเทอมได้อย่างสะดวก</p>
        </div>
      </div>

      {/* กลุ่มผู้ใช้งานเป้าหมาย */}
      <section className="audience-card" style={{ padding: '20px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '10px', fontSize: '1.25rem' }}>กลุ่มผู้ใช้งานเป้าหมาย</h2>
        <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
          เหมาะสำหรับนักศึกษาและอาจารย์ที่ต้องการตรวจสอบสถานะการเปิดรับ จำนวนหน่วยกิต และรายละเอียดของรายวิชาต่างๆ ภายในหลักสูตรได้อย่างรวดเร็ว
        </p>
      </section>

    </main>
  );
}