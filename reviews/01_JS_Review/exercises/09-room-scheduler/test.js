const assert = require('node:assert/strict');
const { InvalidBookingError, findConflicts } = require('./solution');

test('09-room-scheduler', () => {
  assert.deepStrictEqual(
    findConflicts([
      { id: 1, room: 'A', start: '2026-03-01T09:00:00', end: '2026-03-01T10:00:00' },
      { id: 2, room: 'A', start: '2026-03-01T09:30:00', end: '2026-03-01T11:00:00' },
      { id: 3, room: 'B', start: '2026-03-01T09:00:00', end: '2026-03-01T10:00:00' },
    ]),
    [{ room: 'A', ids: [1, 2] }]
  );

  assert.deepStrictEqual(
    findConflicts([
      { id: 1, room: 'A', start: '2026-03-01T09:00:00', end: '2026-03-01T10:00:00' },
      { id: 2, room: 'A', start: '2026-03-01T10:00:00', end: '2026-03-01T11:00:00' },
    ]),
    []
  );

  assert.deepStrictEqual(
    findConflicts([
      { id: 3, room: 'A', start: '2026-03-01T09:00:00', end: '2026-03-01T12:00:00' },
      { id: 1, room: 'A', start: '2026-03-01T09:30:00', end: '2026-03-01T10:00:00' },
      { id: 2, room: 'A', start: '2026-03-01T10:30:00', end: '2026-03-01T11:00:00' },
    ]),
    [
      { room: 'A', ids: [1, 3] },
      { room: 'A', ids: [2, 3] },
    ]
  );

  assert.throws(
    () =>
      findConflicts([
        { id: 1, room: 'A', start: '2026-03-01T10:00:00', end: '2026-03-01T09:00:00' },
      ]),
    (err) => {
      assert.ok(err instanceof InvalidBookingError);
      assert.ok(err instanceof Error);
      assert.strictEqual(err.bookingId, 1);
      return true;
    }
  );
});
