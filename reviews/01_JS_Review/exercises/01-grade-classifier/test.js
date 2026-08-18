const assert = require('node:assert/strict');
const getGrade = require('./solution');

test('01-grade-classifier', () => {
  assert.strictEqual(getGrade(85), 'A');
  assert.strictEqual(getGrade(72), 'B');
  assert.strictEqual(getGrade(60), 'C');
  assert.strictEqual(getGrade(45), 'F');
});
