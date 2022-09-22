"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_routes_1 = __importDefault(require("./clients.routes"));
const contacts_routes_1 = __importDefault(require("./contacts.routes"));
const session_routes_1 = __importDefault(require("./session.routes"));
const router = (0, express_1.Router)();
router.use("/clients", clients_routes_1.default);
router.use(session_routes_1.default);
router.use("/contacts", contacts_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map