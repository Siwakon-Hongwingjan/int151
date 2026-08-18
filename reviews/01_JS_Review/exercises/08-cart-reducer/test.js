const assert = require('node:assert/strict');
const { CartError, cartReducer } = require('./solution');

test('08-cart-reducer', () => {
  const state0 = { items: [], total: 0 };

  const state1 = cartReducer(state0, {
    type: 'ADD_ITEM',
    payload: { id: 1, name: 'Pen', price: 10, qty: 2 },
  });
  assert.deepStrictEqual(state1, {
    items: [{ id: 1, name: 'Pen', price: 10, qty: 2 }],
    total: 20,
  });
  assert.deepStrictEqual(state0, { items: [], total: 0 });

  const state2 = cartReducer(state1, {
    type: 'ADD_ITEM',
    payload: { id: 1, name: 'Pen', price: 10, qty: 3 },
  });
  assert.deepStrictEqual(state2, {
    items: [{ id: 1, name: 'Pen', price: 10, qty: 5 }],
    total: 50,
  });

  const state3 = cartReducer(state2, {
    type: 'ADD_ITEM',
    payload: { id: 2, name: 'Notebook', price: 30, qty: 1 },
  });
  assert.deepStrictEqual(state3, {
    items: [
      { id: 1, name: 'Pen', price: 10, qty: 5 },
      { id: 2, name: 'Notebook', price: 30, qty: 1 },
    ],
    total: 80,
  });

  const state4 = cartReducer(state3, { type: 'REMOVE_ITEM', payload: { id: 1 } });
  assert.deepStrictEqual(state4, {
    items: [{ id: 2, name: 'Notebook', price: 30, qty: 1 }],
    total: 30,
  });

  assert.deepStrictEqual(cartReducer(state4, { type: 'CLEAR' }), { items: [], total: 0 });

  assert.throws(
    () => cartReducer(state0, { type: 'REMOVE_ITEM', payload: { id: 99 } }),
    (err) => {
      assert.ok(err instanceof CartError);
      assert.ok(err instanceof Error);
      return true;
    }
  );

  assert.throws(() => cartReducer(state0, { type: 'FOO' }), CartError);
});
