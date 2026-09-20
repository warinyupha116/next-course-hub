"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import type { Game, GameDraft,  } from "@/type/game";

type GameFormProps = {
  initialGame?: Game;
  onSave: (draft: GameDraft) => void;
  onCancel: () => void;
};

type FormErrors = Partial<Record<keyof GameDraft, string>>;

const emptyDraft: GameDraft = {
  title: "",
  platform: "",
  hours: "",
  status: "ยังไม่เริ่ม",
};

function toDraft(game?: Game): GameDraft {
  if (!game) return emptyDraft;
  return {
    title: game.title,
    platform: game.platform,
    hours: String(game.hours),
    status: game.status,
  };
}

export default function GameForm({ initialGame, onSave, onCancel }: GameFormProps) {
  const [draft, setDraft] = useState<GameDraft>(toDraft(initialGame));
  const [errors, setErrors] = useState<FormErrors>({});

  
  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  }


  function validate(value: GameDraft): FormErrors {
    const nextErrors: FormErrors = {};

    if (value.title.trim() === "") {
      nextErrors.title = "กรุณาระบุชื่อเกม";
    }

    if (value.platform.trim() === "") {
      nextErrors.platform = "กรุณาเลือกหรือระบุแพลตฟอร์ม";
    }

    const hoursNum = Number(value.hours);
    if (value.hours.trim() === "" || !Number.isInteger(hoursNum) || hoursNum <= 0) {
      nextErrors.hours = "จำนวนชั่วโมงต้องเป็นจำนวนเต็มบวก";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(draft);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    onSave(draft);
    setDraft(emptyDraft);
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="title">ชื่อเกม</label>
        <input
          id="title"
          name="title"
          type="text"
          value={draft.title}
          onChange={handleChange}
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? "title-error" : undefined}
        />
        {errors.title ? <p id="title-error" style={{ color: "red" }}>{errors.title}</p> : null}
      </div>

      <div>
        <label htmlFor="platform">แพลตฟอร์ม</label>
        <select
            id="platform"
            name="platform"
            value={draft.platform}
            onChange={handleChange}
            aria-invalid={!!errors.platform}
            aria-describedby={errors.platform ? "platform-error" : undefined}
            >
            <option value="">-- เลือกแพลตฟอร์ม --</option>
            <option value="มือถือ">มือถือ</option>
            <option value="iPad">iPad</option>
            <option value="PC">PC</option>
            </select>
        {errors.platform ? <p id="platform-error" style={{ color: "red" }}>{errors.platform}</p> : null}
      </div>

      <div>
        <label htmlFor="hours">จำนวนชั่วโมงที่คาดว่าจะใช้เล่น</label>
        <input
          id="hours"
          name="hours"
          type="number"
          inputMode="numeric"
          min="1"
          value={draft.hours}
          onChange={handleChange}
          aria-invalid={!!errors.hours}
          aria-describedby={errors.hours ? "hours-error" : undefined}
        />
        {errors.hours ? <p id="hours-error" style={{ color: "red" }}>{errors.hours}</p> : null}
      </div>

      <div>
        <label htmlFor="status">สถานะ</label>
        <select
          id="status"
          name="status"
          value={draft.status}
          onChange={handleChange}
        >
          <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
          <option value="กำลังเล่น">กำลังเล่น</option>
          <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
        </select>
      </div>

      <button type="submit">บันทึก</button>
      {initialGame ? (
        <button type="button" onClick={onCancel}>
          ยกเลิก
        </button>
      ) : null}
    </form>
  );
}