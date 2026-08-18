# ข้อ 8 (ยากมาก): Shopping Cart Reducer (Immutable State + Custom Error)

หัวข้อที่ฝึก: Spread/Rest, Destructuring, switch, Exception Handling, Pure function (ห้าม mutate state)

## โจทย์
เขียน:
1. คลาส `CartError` ที่ `extends Error`
2. ฟังก์ชัน `cartReducer(state, action)` — pure function ที่รับ state ปัจจุบันของตะกร้า กับ action แล้วคืน **state ใหม่** (ห้าม mutate `state` เดิม) ตาม `action.type`:

   - `"ADD_ITEM"` — `action.payload = { id, name, price, qty }`
     - ถ้ามี item ที่ `id` ซ้ำใน state อยู่แล้ว ให้บวก `qty` เดิมกับของใหม่ (ไม่เพิ่ม item ใหม่ซ้ำ)
     - ถ้ายังไม่มี ให้เพิ่ม item ใหม่เข้าไปท้าย `items`
   - `"REMOVE_ITEM"` — `action.payload = { id }`
     - ลบ item ที่ `id` ตรงออกจาก `items`
     - ถ้าไม่มี item ที่ `id` นั้นอยู่ใน state ให้ `throw new CartError(`Item ${id} not found`)`
   - `"CLEAR"` — คืน state ว่าง `{ items: [], total: 0 }`
   - type อื่นที่ไม่รู้จัก — `throw new CartError(`Unknown action type: ${action.type}`)`

3. ทุกครั้งที่คืน state ใหม่ ต้องคำนวณ `total` ใหม่จาก `items` เสมอ (`total = sum(price * qty)`)

## Input
- `state: { items: Array<{ id: number, name: string, price: number, qty: number }>, total: number }`
- `action: { type: string, payload?: object }`

## Output
- state object ใหม่ `{ items, total }` (state เดิมต้องไม่ถูกแก้ไข)
- ถ้า action ไม่ถูกต้อง: `throw new CartError(message)`

## ตัวอย่าง
```js
const state0 = { items: [], total: 0 };

const state1 = cartReducer(state0, {
  type: "ADD_ITEM",
  payload: { id: 1, name: "Pen", price: 10, qty: 2 },
});
// { items: [{ id: 1, name: "Pen", price: 10, qty: 2 }], total: 20 }

const state2 = cartReducer(state1, {
  type: "ADD_ITEM",
  payload: { id: 1, name: "Pen", price: 10, qty: 3 },
});
// { items: [{ id: 1, name: "Pen", price: 10, qty: 5 }], total: 50 }

state0; // { items: [], total: 0 } (ไม่ถูกแก้)

cartReducer(state0, { type: "REMOVE_ITEM", payload: { id: 99 } });
// throw CartError: "Item 99 not found"

cartReducer(state0, { type: "FOO" });
// throw CartError: "Unknown action type: FOO"
```
