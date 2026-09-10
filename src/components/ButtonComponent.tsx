"use client";

import { useState } from "react";

export default function ButtonComponent() {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      กดปุ่มนี้ {count} ครั้ง
    </button>
  );
}