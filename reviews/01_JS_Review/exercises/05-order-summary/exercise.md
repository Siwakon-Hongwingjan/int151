# ข้อ 5 (ยาก): สรุปยอดคำสั่งซื้อ พร้อม custom Error class

หัวข้อที่ฝึก: Destructuring, Loop, Exception Handling (custom Error class ด้วย `extends Error`)

## โจทย์
เขียน:
1. คลาส `OrderError` ที่ `extends Error` มี property เพิ่มคือ `orderId` (เก็บ id ของออเดอร์ที่มีปัญหา)
2. ฟังก์ชัน `summarizeOrders(orders)` ที่รับ array ของออเดอร์ แล้ว:
   - วนตรวจทีละออเดอร์ (แนะนำใช้ destructuring `{ id, total, status }` ใน loop)
   - ถ้าพบออเดอร์ที่ `total < 0` ให้ `throw new OrderError(`Order ${id} has negative total`, id)` ทันที (หยุดการประมวลผล ไม่ต้องตรวจออเดอร์ที่เหลือ)
   - ถ้าไม่มีปัญหา ให้คืน object สรุป `{ totalRevenue, shippedCount }` โดยนับ/รวมเฉพาะออเดอร์ที่ `status === "shipped"` เท่านั้น

## Input
- `orders: Array<{ id: number, total: number, status: string }>`

## Output
- ปกติ: `{ totalRevenue: number, shippedCount: number }` — รวมเฉพาะออเดอร์ที่ status เป็น "shipped"
- ถ้ามีออเดอร์ที่ total ติดลบ: `throw new OrderError(message, orderId)` โดย `error.orderId` ต้องเท่ากับ id ของออเดอร์ที่ผิด และ `error instanceof Error` ต้องเป็น true

## ตัวอย่าง
```js
summarizeOrders([
  { id: 1, total: 100, status: "shipped" },
  { id: 2, total: 50,  status: "pending" },
  { id: 3, total: 200, status: "shipped" },
]);
// { totalRevenue: 300, shippedCount: 2 }

summarizeOrders([
  { id: 1, total: -10, status: "shipped" },
]);
// throw OrderError: "Order 1 has negative total", error.orderId === 1
```
