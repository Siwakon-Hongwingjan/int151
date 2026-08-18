class InvalidBookingError extends Error {
  constructor(message, bookingId) {
    super(message);
    // TODO: implement (ตั้งชื่อ .name และเก็บ .bookingId)
  }
}

function findConflicts(bookings) {
  // TODO: implement
}

module.exports = { InvalidBookingError, findConflicts };
