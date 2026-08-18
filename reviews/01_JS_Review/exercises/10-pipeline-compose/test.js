const assert = require('node:assert/strict');
const { compose, groupAndAggregate } = require('./solution');

test('10-pipeline-compose', () => {
  const double = (x) => x * 2;
  const addOne = (x) => x + 1;
  const square = (x) => x * x;

  assert.strictEqual(compose(double, addOne, square)(3), 20);
  assert.strictEqual(compose(square)(4), 16);
  assert.strictEqual(compose()(5), 5);

  const employees = [
    { name: 'A', dept: 'Eng', salary: 100 },
    { name: 'B', dept: 'Eng', salary: 200 },
    { name: 'C', dept: 'Sales', salary: 150 },
  ];

  assert.deepStrictEqual(
    groupAndAggregate(
      employees,
      (e) => e.dept,
      (group) => group.reduce((sum, e) => sum + e.salary, 0)
    ),
    { Eng: 300, Sales: 150 }
  );

  assert.deepStrictEqual(
    groupAndAggregate(
      employees,
      (e) => e.dept,
      (group) => group.length
    ),
    { Eng: 2, Sales: 1 }
  );

  assert.deepStrictEqual(groupAndAggregate([], (e) => e.dept, (g) => g.length), {});
});
