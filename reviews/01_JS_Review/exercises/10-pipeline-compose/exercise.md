# ข้อ 10 (ยากมาก): Function Composition และ Group/Aggregate (Higher-Order Functions)

หัวข้อที่ฝึก: Higher-order function, Closure, Rest/Spread, Array methods (`reduce`, `map`, `filter`)

## โจทย์
เขียน 2 ฟังก์ชัน:

### 1. `compose(...fns)`
คืนฟังก์ชันใหม่ 1 argument ที่รัน `fns` จาก **ขวาไปซ้าย** (compose มาตรฐาน)
```js
compose(f, g, h)(x) === f(g(h(x)))
```
ถ้าไม่มี fns เลย (`compose()`) ให้คืนฟังก์ชัน identity ที่คืนค่า argument เดิมกลับไปตรง ๆ

### 2. `groupAndAggregate(records, keyFn, aggregateFn)`
- `records`: array ของ object ใด ๆ
- `keyFn(record)`: ฟังก์ชันคืนค่า key ที่จะใช้จัดกลุ่ม (เช่น `record => record.department`)
- `aggregateFn(recordsInGroup)`: ฟังก์ชันรับ array ของ record ในกลุ่มเดียวกัน แล้วคืนค่าสรุปของกลุ่มนั้น (เช่น หา sum, average, count)
- คืน object ที่ key คือค่าจาก `keyFn` และ value คือผลลัพธ์จาก `aggregateFn` ของกลุ่มนั้น

## Input / Output

**`compose`**
- Input: `fns: Array<(x: any) => any>`
- Output: `(x: any) => any`

**`groupAndAggregate`**
- Input: `records: object[]`, `keyFn: (record) => string`, `aggregateFn: (records: object[]) => any`
- Output: `Record<string, any>`

## ตัวอย่าง
```js
const double = (x) => x * 2;
const addOne = (x) => x + 1;
const square = (x) => x * x;

compose(double, addOne, square)(3);
// square(3) = 9 -> addOne(9) = 10 -> double(10) = 20

compose()(5); // 5

const employees = [
  { name: "A", dept: "Eng", salary: 100 },
  { name: "B", dept: "Eng", salary: 200 },
  { name: "C", dept: "Sales", salary: 150 },
];

groupAndAggregate(
  employees,
  (e) => e.dept,
  (group) => group.reduce((sum, e) => sum + e.salary, 0)
);
// { Eng: 300, Sales: 150 }

groupAndAggregate(
  employees,
  (e) => e.dept,
  (group) => group.length
);
// { Eng: 2, Sales: 1 }
```
