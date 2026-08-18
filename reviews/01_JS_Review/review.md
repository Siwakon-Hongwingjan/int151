# สรุปสไลด์: 01_JS_Review — ทบทวนพื้นฐาน JavaScript (สัปดาห์ที่ 1)

แหล่งที่มา: `slides/01_JS_Review.pdf` (57 หน้า) — วิชา INT151 Basic Frontend Development

## 1. ตัวแปรและชนิดข้อมูล (Variables & Data Types)
- `let` — เปลี่ยนแปลงค่าได้ ขอบเขตแบบ block, `const` — ค่าคงที่ ห้ามกำหนดค่าใหม่, `var` — รูปแบบเก่า ควรหลีกเลี่ยง
- Primitive types: String, Number, Boolean, null, undefined — ตรวจชนิดด้วย `typeof`
```js
let score = 85;
const studentName = "Nan";
let empty = null; // ตั้งใจให้เป็นค่าว่าง
console.log(typeof score); // "number"
```

## 2. เงื่อนไข (Conditionals)
- `if / else if / else` เหมาะกับเงื่อนไขช่วงตัวเลข หรือเทียบหลายตัวแปรร่วมกัน (`&&`, `||`)
- `switch` เหมาะเมื่อเทียบตัวแปรเดียวกับค่าคงที่หลายค่า (enum-like) หรือมี case มากกว่า 3-4 กรณี — ใช้ `===` เสมอ, `break` หยุดการทำงาน, `default` ทำงานเมื่อไม่มี case ตรง
```js
function getOrderStatusLabel(status) {
  switch (status) {
    case "pending": return "รอดำเนินการ";
    case "shipped": return "จัดส่งแล้ว";
    default: return "ไม่ทราบสถานะ";
  }
}
```

## 3. การวนซ้ำ (Loops)
| ชนิด | ใช้เมื่อ... |
|---|---|
| `for` | รู้จำนวนรอบที่แน่นอน |
| `while` | ไม่รู้จำนวนรอบ แต่รู้เงื่อนไขจบ |
| `do...while` | ต้องทำอย่างน้อย 1 ครั้งก่อนเช็คเงื่อนไข |
| `for...of` | วนอ่าน **ค่า** ใน Array/String/Map/Set |
| `for...in` | วนอ่าน **key** ใน Object เท่านั้น (ห้ามใช้กับ Array เพราะ index จะเป็น string) |
- `break` ออกจาก loop ทันที, `continue` ข้ามรอบปัจจุบัน
- Loop ซ้อน loop ใช้กับข้อมูล 2 มิติ (เช่น หมวดหมู่ x ไซส์)

## 4. ฟังก์ชัน (Function)
- 3 รูปแบบ ทำงานให้ผลลัพธ์เดียวกัน: Function Declaration (hoisting ได้), Function Expression, Arrow Function (นิยมในโค้ดสมัยใหม่)
```js
function add(a, b) { return a + b; }
const add2 = function (a, b) { return a + b; };
const add3 = (a, b) => a + b;
```
- Parameter รับค่าเข้า, `return` ส่งค่ากลับ (ไม่มี return จะได้ `undefined`)
- Scope: Local (ใช้ได้เฉพาะในฟังก์ชัน) vs Global (ใช้ได้ทุกที่)
- Higher-order function: ฟังก์ชันที่รับฟังก์ชันอื่นเป็น argument ได้ (เช่น `calculateShippingFee(total, shippingFn)`)

## 5. Array
- เก็บชุดข้อมูลแบบลำดับ เข้าถึงด้วย index (เริ่มที่ 0), เช็คจำนวนสมาชิกด้วย `.length`
- เมธอดหลัก: `push()/pop()` เพิ่ม/ลบท้ายอาร์เรย์, `forEach()` วนทำงานกับทุกสมาชิก, `map()` แปลงข้อมูล, `filter()` กรองข้อมูล, `reduce()` รวมยอด, `find()` หาสมาชิกชิ้นแรกที่ตรงเงื่อนไข

## 6. Object
- เก็บข้อมูลแบบ key-value, เข้าถึงด้วย dot notation (`obj.key`) หรือ bracket notation (`obj["key"]`)
- Property = ข้อมูล/คุณสมบัติ, Method = ฟังก์ชันในอ็อบเจกต์, `this` อ้างอิงถึงตัวอ็อบเจกต์เอง
- แก้ไข/เพิ่ม property ได้ทันทีโดยไม่ต้องประกาศใหม่: `userProfile.theme = "dark"`

## 7. Spread และ Destructuring
- **Spread `...`** (กระจายค่าออก): คัดลอก array/object แบบ shallow copy, รวม 2 array/object เข้าด้วยกันโดยไม่ต้องใช้ `concat()`, กระจายเป็น argument ของฟังก์ชัน (`Math.max(...nums)`) — ใช้บ่อยเวลาอัปเดต state โดยไม่แก้ค่าตัวเดิม (immutability)
- **Rest `...`** (รวบรวมค่าเข้า): ใช้ตอนประกาศฟังก์ชันเพื่อรับ argument ไม่จำกัดจำนวนเป็น array เดียว
- **Array destructuring**: แกะค่าตามลำดับตำแหน่ง ข้ามตำแหน่งด้วย `,`, ตั้งค่า default ได้, สลับค่าตัวแปร 2 ตัวได้โดยไม่ต้องใช้ temp
- **Object destructuring**: แกะค่าตาม 'ชื่อ key', ตั้งชื่อตัวแปรใหม่ได้ (`rename`), ตั้งค่า default ได้, แกะ object ซ้อนกันหลายชั้นได้ (nested), destructure ตรง parameter ของฟังก์ชันได้เลยเพื่อให้โค้ดอ่านง่ายขึ้น

## 8. JavaScript Date
- สร้างได้หลายวิธี: `new Date()` (ปัจจุบัน), `new Date(year, month, day)` (เดือนนับจาก 0!), `new Date("2026-07-30")` (จาก ISO string), `Date.now()` (timestamp เป็นตัวเลข มิลลิวินาที)
- Getters: `getFullYear()`, `getMonth()` (0-11), `getDate()` (1-31), `getDay()` (0=อาทิตย์), `getHours()/getMinutes()`
- แปลงเป็นข้อความ: `toLocaleString('th-TH')`, `toLocaleDateString()`, `toLocaleTimeString()`, `toISOString()` (มาตรฐานสำหรับส่งไป API)
- ไม่มีเมธอด `addDays()` ตรง ๆ ต้องใช้ `setDate(getDate() + n)`; ลบวันที่สองตัวได้ผลต่างเป็นมิลลิวินาที ต้องหาร `1000*60*60*24` เพื่อแปลงเป็นวัน

## 9. Regular Expression
- รูปแบบ (pattern) สำหรับค้นหา/ตรวจสอบ/แทนที่ข้อความ เขียนด้วย `/pattern/flags` หรือ `new RegExp()`
- Flag: `g` (หาทุกจุดที่ตรง), `i` (ไม่สนตัวพิมพ์เล็ก-ใหญ่)
- สัญลักษณ์บ่อย: `\d` ตัวเลข, `\w` ตัวอักษร/ตัวเลข/underscore, `\s` ช่องว่าง, `^`/`$` จุดเริ่ม/จบข้อความ, `* + ? {n,m}` จำนวนซ้ำ
- เมธอด: `test()` คืน true/false, `match()` ดึงส่วนที่ตรง, `replace()` แทนที่, `split()` แบ่ง string ตาม pattern
- ใช้ตรวจ email/เบอร์โทร/รหัสผ่านในฟอร์ม และ highlight คำค้นหาในผลลัพธ์

## 10. Exception Handling
- `try { ... } catch (error) { ... } finally { ... }` — try ใส่โค้ดที่อาจ error, catch ทำงานเมื่อเกิด error, finally ทำงานเสมอ (เช่น ปิด loading state) — เขียนแค่ try+finally โดยไม่มี catch ก็ได้
- ถ้าไม่จับ error ไว้ โปรแกรมทั้งหน้าจะหยุดทำงานทันที
- `throw new Error(message)` สร้าง error object เองได้ (มี `.message`, `.name`) — โยน error ตั้งแต่เนิ่น ๆ เมื่อพบข้อมูลผิดปกติ ดีกว่าปล่อยให้พังภายหลัง
- สร้าง custom Error class ได้ด้วย `class ApiError extends Error` เพื่อเพิ่ม property เฉพาะ (เช่น `statusCode`) และเช็คประเภทด้วย `instanceof` ใน catch

## 11. JavaScript Module
- แต่ละไฟล์ `.js` คือ 1 module มีขอบเขตตัวแปรของตัวเอง แยกโค้ดตามหน้าที่ (เช่น `utils/`, `api/`) แล้ว export/import ไปใช้ไฟล์อื่น เพื่อความดูแลง่าย ทดสอบง่าย และนำกลับมาใช้ซ้ำได้
- **CommonJS**: `module.exports = { ... }` และ `require('./file.js')`
- **ES Module — Named Export**: `export function`/`export const` ส่งออกได้หลายค่าต่อไฟล์ ตอน import ต้องใช้ชื่อเดียวกันใน `{ }`
- **ES Module — Default Export**: `export default` ส่งออกได้แค่ 1 ค่าต่อไฟล์ ตอน import ตั้งชื่ออะไรก็ได้ ไม่ต้องใช้ `{ }`
- Import ขั้นสูง: ตั้งชื่อใหม่ตอน import ด้วย `as`, `import * as name` นำเข้าทั้งหมดเป็นก้อนเดียว, ผสม default + named import ในบรรทัดเดียวกันได้

## แนวทางการใช้ AI ในชั่วโมงปฏิบัติ
1. ลองเขียนเองก่อนเสมอ — ฝึกคิด logic ด้วยตนเองก่อนถาม AI
2. ใช้ AI เพื่อตรวจสอบ ไม่ใช่เพื่อคัดลอก (ถามได้ 1 ครั้งต่อโจทย์ ห้ามถามเพื่อขอ solution)
3. อธิบายโค้ดได้เสมอ หากใช้โค้ดจาก AI ต้องอธิบายการทำงานทีละบรรทัดได้เมื่อถูกถาม
