const assert = require('node:assert/strict');
const calculateCartTotal = require('./solution');

test('02-cart-total', () => {
  assert.strictEqual(
    calculateCartTotal([
      { name: 'เสื้อยืด', price: 200, inStock: true },
      { name: 'หมวก', price: 150, inStock: false },
      { name: 'กระเป๋า', price: 350, inStock: true },
    ]),
    550
  );
  assert.strictEqual(calculateCartTotal([]), 0);
  assert.strictEqual(
    calculateCartTotal([{ name: 'หมวก', price: 150, inStock: false }]),
    0
  );
});
