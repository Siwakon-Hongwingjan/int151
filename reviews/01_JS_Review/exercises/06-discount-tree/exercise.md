# ข้อ 6 (ยากมาก): ลดราคาสินค้าแบบซ้อนหมวดหมู่ (Recursion + Immutable Update)

หัวข้อที่ฝึก: Recursion, Object/Array traversal, Spread (immutability), Exception Handling

## โจทย์
เขียนฟังก์ชัน `applyDiscount(category, rate)` ที่รับ:
- `category`: object หมวดหมู่สินค้า รูปแบบ `{ name, discountable, items: [{ name, price }], subCategories: [category, ...] }`
- `rate`: ตัวเลขส่วนลด (เช่น `0.1` = ลด 10%)

การทำงาน:
1. ถ้า `rate` ไม่อยู่ในช่วง `0 < rate <= 1` ให้ `throw new RangeError("Invalid discount rate")`
2. คืน category โครงสร้างใหม่ทั้งหมด **ห้าม mutate ของเดิม** (object/array เดิมที่ส่งเข้ามาต้องไม่ถูกแก้ไข)
3. ถ้า `category.discountable === true` ทุก item ใน `category.items` ของ category นั้นต้องถูกคูณราคาด้วย `(1 - rate)`
4. ถ้า `category.discountable === false` ราคา item ใน category นั้นคงเดิม
5. `subCategories` ต้องถูกประมวลผลแบบเดียวกัน (วนซ้ำแบบ recursive) — แต่ละ subCategory เช็ค `discountable` ของตัวเอง ไม่สืบทอดจาก parent

## Input
- `category: { name: string, discountable: boolean, items: Array<{ name: string, price: number }>, subCategories: Array<category> }`
- `rate: number`

## Output
- category object ใหม่ โครงสร้างเดิม แต่ price ของ item ที่อยู่ใน category (หรือ subCategory) ที่ `discountable === true` ถูกคูณด้วย `(1 - rate)`
- ถ้า rate ไม่ถูกต้อง: `throw new RangeError(...)`

## ตัวอย่าง
```js
const tree = {
  name: "Electronics",
  discountable: true,
  items: [{ name: "Phone", price: 1000 }],
  subCategories: [
    {
      name: "Accessories",
      discountable: false,
      items: [{ name: "Case", price: 100 }],
      subCategories: [],
    },
  ],
};

applyDiscount(tree, 0.1);
// {
//   name: "Electronics",
//   discountable: true,
//   items: [{ name: "Phone", price: 900 }],
//   subCategories: [
//     { name: "Accessories", discountable: false, items: [{ name: "Case", price: 100 }], subCategories: [] },
//   ],
// }

tree.items[0].price; // 1000 (ของเดิมต้องไม่ถูกแก้)

applyDiscount(tree, 1.5); // throw RangeError
```
