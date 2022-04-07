class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4")
      ? "code failed"
      : "server error";
    this.isOperationalError = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
