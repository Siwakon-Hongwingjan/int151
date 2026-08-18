# ข้อ 9 (ยากมาก): ตรวจการจองห้องประชุมที่เวลาทับซ้อนกัน (Date + Nested Loop)

หัวข้อที่ฝึก: JavaScript Date, Nested Loop, Destructuring, Exception Handling

## โจทย์
เขียน:
1. คลาส `InvalidBookingError` ที่ `extends Error` มี property เพิ่มคือ `bookingId`
2. ฟังก์ชัน `findConflicts(bookings)` ที่รับ array ของการจองห้อง แล้ว:
   - ตรวจทุกรายการก่อน: ถ้ารายการไหน `start >= end` (แปลงเป็น `Date` แล้วเทียบ) ให้ `throw new InvalidBookingError(`Booking ${id} has invalid time range`, id)` ทันที
   - จากนั้นตรวจหาคู่การจอง **ห้องเดียวกัน** ที่ช่วงเวลาทับซ้อนกัน (สองช่วงทับกันเมื่อ `start1 < end2 && start2 < end1`)
   - คืน array ของ conflict โดยแต่ละอันเป็น `{ room, ids: [id1, id2] }` — `ids` เรียงจากน้อยไปมาก
   - เรียงผลลัพธ์ทั้งหมดตาม `room` (a-z) แล้วตาม `ids[0]` (น้อยไปมาก)
   - ห้ามเทียบการจองคู่เดียวกันซ้ำ และห้ามเทียบการจองกับตัวเอง

## Input
- `bookings: Array<{ id: number, room: string, start: string, end: string }>` — `start`/`end` เป็น ISO date string เช่น `"2026-03-01T09:00:00"`

## Output
- `Array<{ room: string, ids: [number, number] }>`
- ถ้ามีรายการที่ `start >= end`: `throw new InvalidBookingError(message, bookingId)`

## ตัวอย่าง
```js
findConflicts([
  { id: 1, room: "A", start: "2026-03-01T09:00:00", end: "2026-03-01T10:00:00" },
  { id: 2, room: "A", start: "2026-03-01T09:30:00", end: "2026-03-01T11:00:00" },
  { id: 3, room: "B", start: "2026-03-01T09:00:00", end: "2026-03-01T10:00:00" },
]);
// [ { room: "A", ids: [1, 2] } ]

findConflicts([
  { id: 1, room: "A", start: "2026-03-01T10:00:00", end: "2026-03-01T09:00:00" },
]);
// throw InvalidBookingError, error.bookingId === 1
```
