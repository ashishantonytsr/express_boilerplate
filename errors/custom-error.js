// class for Custom Errors, extended from Error class of "express-async-errors"

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
  }
}

module.exports = CustomAPIError;
