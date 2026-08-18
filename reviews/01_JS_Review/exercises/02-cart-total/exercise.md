# ข้อ 2 (ง่าย-กลาง): รวมยอดตะกร้าสินค้าที่ยังมีสต๊อก

หัวข้อที่ฝึก: Loop / Array methods (filter, reduce)

## โจทย์
เขียนฟังก์ชัน `calculateCartTotal(cart)` ที่รับ array ของสินค้าในตะกร้า แล้วคืนค่ายอดรวมราคา
**เฉพาะสินค้าที่ `inStock` เป็น `true` เท่านั้น** สินค้าที่หมดสต๊อก (`inStock: false`) ไม่ต้องนับ

## Input
- `cart: Array<{ name: string, price: number, inStock: boolean }>`

## Output
- `number` — ผลรวมราคาของสินค้าที่ inStock เป็น true เท่านั้น (ถ้าตะกร้าว่างหรือไม่มีสินค้าที่ inStock ให้คืน `0`)

## ตัวอย่าง
```js
calculateCartTotal([
  { name: "เสื้อยืด", price: 200, inStock: true },
  { name: "หมวก",   price: 150, inStock: false },
  { name: "กระเป๋า", price: 350, inStock: true },
]);
// 550

calculateCartTotal([]);
// 0
```
