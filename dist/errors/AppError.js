"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(statusCode = 400, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.default = AppError;
//# sourceMappingURL=AppError.js.map