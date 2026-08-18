# ข้อ 3 (กลาง): อัปเดตโปรไฟล์ผู้ใช้แบบไม่แก้ของเดิม

หัวข้อที่ฝึก: Object, Spread, Immutability

## โจทย์
เขียนฟังก์ชัน `updateUserProfile(profile, updates)` ที่รับ object โปรไฟล์เดิม และ object การเปลี่ยนแปลง (`updates`)
แล้วคืน object ใหม่ที่นำค่าจาก `updates` ไปทับค่าที่ตรงกันใน `profile` (key ไหนไม่มีใน updates ให้คงค่าเดิม)

**ข้อสำคัญ**: ห้ามแก้ไข object `profile` ตัวเดิม (ต้อง immutable) — ใช้ spread operator

## Input
- `profile: object` — โปรไฟล์เดิม เช่น `{ name, theme, lang }`
- `updates: object` — ค่าที่จะเปลี่ยน (มีบาง key หรือทุก key ก็ได้)

## Output
- `object` — โปรไฟล์ใหม่ที่รวมค่าจาก updates เข้ากับ profile แล้ว (ไม่ใช่ตัวเดียวกับ `profile` ที่ส่งเข้ามา)

## ตัวอย่าง
```js
const profile = { name: "เอ", theme: "light", lang: "th" };
const result = updateUserProfile(profile, { theme: "dark" });
// result -> { name: "เอ", theme: "dark", lang: "th" }
// profile.theme ยังคงเป็น "light" เหมือนเดิม (ไม่ถูกแก้)
```
