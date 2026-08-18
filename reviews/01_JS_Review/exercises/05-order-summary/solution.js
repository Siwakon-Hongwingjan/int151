class OrderError extends Error {
  constructor(message, orderId) {
    super(message);
    // TODO: implement (ตั้งชื่อ .name และเก็บ .orderId)
  }
}

function summarizeOrders(orders) {
  // TODO: implement
}

module.exports = { OrderError, summarizeOrders };
