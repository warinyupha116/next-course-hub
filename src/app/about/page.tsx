export default function AboutPage() {
  return (
    <main className="page" style={{ padding: '20px' }}>
      <h1>เกี่ยวกับ Student Course Hub</h1>
      <p>
        Student Course Hub เป็นเว็บไซต์สำหรับรวบรวมข้อมูลรายวิชา 
        เพื่อให้นักศึกษาสามารถดูรายละเอียดรายวิชาได้อย่างสะดวก
      </p>

      <section style={{ marginTop: '20px' }}>
        <h2>เว็บไซต์นี้เหมาะสำหรับใคร?</h2>
        <p>
          เหมาะสำหรับนักศึกษาที่ต้องการดูข้อมูลรายวิชา 
          รหัสวิชา จำนวนหน่วยกิต และสถานะการเปิดลงทะเบียน
        </p>
      </section>
    </main>
  );
}