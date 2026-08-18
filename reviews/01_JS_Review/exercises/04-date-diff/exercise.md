# ข้อ 4 (กลาง-ยาก): นับจำนวนวันระหว่างสองวันที่ พร้อมตรวจรูปแบบ

หัวข้อที่ฝึก: Regular Expression, Date, throw Error

## โจทย์
เขียนฟังก์ชัน `daysBetween(startDateStr, endDateStr)` ที่รับวันที่ 2 ค่าเป็น string รูปแบบ `"YYYY-MM-DD"`
แล้วคืนจำนวนวันที่ห่างกัน (`endDate - startDate`)

ก่อนคำนวณ **ต้องตรวจสอบรูปแบบด้วย regular expression** ว่าตรงกับ `YYYY-MM-DD` (ตัวเลขล้วน คั่นด้วย `-`)
ถ้า string ใดไม่ตรงรูปแบบ ให้ `throw new Error("Invalid date format")`

## Input
- `startDateStr: string` — รูปแบบ `"YYYY-MM-DD"`
- `endDateStr: string` — รูปแบบ `"YYYY-MM-DD"`

## Output
- `number` — จำนวนวันที่ห่างกัน (`endDate` ลบ `startDate`) เป็นจำนวนเต็ม อาจเป็นค่าลบได้ถ้า end มาก่อน start
- ถ้ารูปแบบผิด: `throw new Error("Invalid date format")`

## ตัวอย่าง
```js
daysBetween("2026-07-30", "2026-08-05");
// 6

daysBetween("2026-08-05", "2026-07-30");
// -6

daysBetween("2026/07/30", "2026-08-05");
// throw Error("Invalid date format")
```
