const assert = require('node:assert/strict');
const daysBetween = require('./solution');

test('04-date-diff', () => {
  assert.strictEqual(daysBetween('2026-07-30', '2026-08-05'), 6);
  assert.strictEqual(daysBetween('2026-08-05', '2026-07-30'), -6);
  assert.strictEqual(daysBetween('2026-01-01', '2026-01-01'), 0);
  assert.throws(() => daysBetween('2026/07/30', '2026-08-05'), /Invalid date format/);
  assert.throws(() => daysBetween('2026-08-05', 'not-a-date'), /Invalid date format/);
});
