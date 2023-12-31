import CustomError from "./custom-error.js";

class ForbiddenError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}

export default ForbiddenError;
