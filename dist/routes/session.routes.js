"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_controller_1 = require("../controllers/session.controller");
const schemaValidation_mdw_1 = __importDefault(require("../middlewares/schemaValidation.mdw"));
const session_schema_1 = require("../schemas/session.schema");
const sessionRoutes = (0, express_1.Router)();
sessionRoutes.post("/login", (0, schemaValidation_mdw_1.default)(session_schema_1.createSessionSchema), session_controller_1.createSessionController);
exports.default = sessionRoutes;
//# sourceMappingURL=session.routes.js.map