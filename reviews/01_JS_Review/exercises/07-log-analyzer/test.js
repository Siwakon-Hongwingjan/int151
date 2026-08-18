const assert = require('node:assert/strict');
const { LogFormatError, analyzeLogs } = require('./solution');

test('07-log-analyzer', () => {
  assert.deepStrictEqual(
    analyzeLogs([
      '2026-01-15 08:23:11 GET /api/users 200',
      '2026-01-15 08:23:15 POST /api/orders 201',
      '2026-01-15 08:24:02 GET /api/users 404',
    ]),
    { totalRequests: 3, errorCount: 1, requestsByMethod: { GET: 2, POST: 1 } }
  );

  assert.deepStrictEqual(analyzeLogs([]), {
    totalRequests: 0,
    errorCount: 0,
    requestsByMethod: {},
  });

  assert.throws(
    () => analyzeLogs(['not a valid log line']),
    (err) => {
      assert.ok(err instanceof LogFormatError);
      assert.ok(err instanceof Error);
      assert.strictEqual(err.line, 'not a valid log line');
      return true;
    }
  );
});
