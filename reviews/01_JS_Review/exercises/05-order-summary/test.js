const assert = require('node:assert/strict');
const { OrderError, summarizeOrders } = require('./solution');

test('05-order-summary', () => {
  assert.deepStrictEqual(
    summarizeOrders([
      { id: 1, total: 100, status: 'shipped' },
      { id: 2, total: 50, status: 'pending' },
      { id: 3, total: 200, status: 'shipped' },
    ]),
    { totalRevenue: 300, shippedCount: 2 }
  );

  assert.deepStrictEqual(summarizeOrders([]), { totalRevenue: 0, shippedCount: 0 });

  assert.throws(
    () => summarizeOrders([{ id: 1, total: -10, status: 'shipped' }]),
    (err) => {
      assert.ok(err instanceof OrderError);
      assert.ok(err instanceof Error);
      assert.strictEqual(err.orderId, 1);
      return true;
    }
  );
});
