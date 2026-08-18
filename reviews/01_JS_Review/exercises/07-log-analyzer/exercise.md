# ข้อ 7 (ยากมาก): วิเคราะห์ Access Log ด้วย Regular Expression

หัวข้อที่ฝึก: Regular Expression, Custom Error, Array/Object aggregation (reduce)

## โจทย์
เขียน:
1. คลาส `LogFormatError` ที่ `extends Error` มี property เพิ่มคือ `line` (เก็บบรรทัด log ที่ผิด format)
2. ฟังก์ชัน `analyzeLogs(lines)` ที่รับ array ของ string log แต่ละบรรทัดต้องอยู่ในรูปแบบ:
   ```
   YYYY-MM-DD HH:MM:SS METHOD /path STATUS
   ```
   เช่น `"2026-01-15 08:23:11 GET /api/users 200"` (METHOD เป็นตัวพิมพ์ใหญ่ล้วน, STATUS เป็นเลข 3 หลัก)

การทำงาน:
- ใช้ regular expression ตรวจสอบทุกบรรทัดว่าตรง format หรือไม่
- ถ้าบรรทัดใดไม่ตรง format ให้ `throw new LogFormatError(`Invalid log line: ${line}`, line)` ทันที (หยุดประมวลผล ไม่ตรวจบรรทัดที่เหลือ)
- ถ้าทุกบรรทัดถูกต้อง ให้คืนสรุปผล:
  - `totalRequests`: จำนวนบรรทัดทั้งหมด
  - `errorCount`: จำนวนบรรทัดที่ STATUS >= 400
  - `requestsByMethod`: object นับจำนวนแยกตาม METHOD เช่น `{ GET: 2, POST: 1 }`

## Input
- `lines: string[]`

## Output
- ปกติ: `{ totalRequests: number, errorCount: number, requestsByMethod: Record<string, number> }`
- ถ้ามีบรรทัดผิด format: `throw new LogFormatError(message, line)` โดย `error.line` ต้องเท่ากับบรรทัดที่ผิด และ `error instanceof Error` ต้องเป็น true

## ตัวอย่าง
```js
analyzeLogs([
  "2026-01-15 08:23:11 GET /api/users 200",
  "2026-01-15 08:23:15 POST /api/orders 201",
  "2026-01-15 08:24:02 GET /api/users 404",
]);
// { totalRequests: 3, errorCount: 1, requestsByMethod: { GET: 2, POST: 1 } }

analyzeLogs(["not a valid log line"]);
// throw LogFormatError, error.line === "not a valid log line"
```
