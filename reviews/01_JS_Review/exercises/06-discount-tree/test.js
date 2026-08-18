const assert = require('node:assert/strict');
const applyDiscount = require('./solution');

test('06-discount-tree', () => {
  const tree = {
    name: 'Electronics',
    discountable: true,
    items: [{ name: 'Phone', price: 1000 }],
    subCategories: [
      {
        name: 'Accessories',
        discountable: false,
        items: [{ name: 'Case', price: 100 }],
        subCategories: [],
      },
    ],
  };
  const originalSnapshot = JSON.parse(JSON.stringify(tree));

  const result = applyDiscount(tree, 0.1);

  assert.deepStrictEqual(result, {
    name: 'Electronics',
    discountable: true,
    items: [{ name: 'Phone', price: 900 }],
    subCategories: [
      {
        name: 'Accessories',
        discountable: false,
        items: [{ name: 'Case', price: 100 }],
        subCategories: [],
      },
    ],
  });

  assert.deepStrictEqual(tree, originalSnapshot);
  assert.throws(() => applyDiscount(tree, 1.5), RangeError);
  assert.throws(() => applyDiscount(tree, 0), RangeError);
});
