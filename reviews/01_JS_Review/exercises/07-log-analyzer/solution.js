class LogFormatError extends Error {
  constructor(message, line) {
    super(message);
    // TODO: implement (ตั้งชื่อ .name และเก็บ .line)
  }
}

function analyzeLogs(lines) {
  // TODO: implement
}

module.exports = { LogFormatError, analyzeLogs };
