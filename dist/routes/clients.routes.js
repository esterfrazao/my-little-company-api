"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controllers_1 = require("../controllers/client.controllers");
const schemaValidation_mdw_1 = __importDefault(require("../middlewares/schemaValidation.mdw"));
const verifyClientId_mdw_1 = __importDefault(require("../middlewares/verifyClientId.mdw"));
const verifyToken_mdw_1 = __importDefault(require("../middlewares/verifyToken.mdw"));
const clients_schemas_1 = require("../schemas/clients.schemas");
const clientRoutes = (0, express_1.Router)();
clientRoutes.post("/register", (0, schemaValidation_mdw_1.default)(clients_schemas_1.createClientSchema), client_controllers_1.createClientController);
clientRoutes.get("/", client_controllers_1.listClientsController);
clientRoutes.get("/profile", verifyToken_mdw_1.default, client_controllers_1.readProfileController);
clientRoutes.patch("/:client_id", verifyClientId_mdw_1.default, verifyToken_mdw_1.default, (0, schemaValidation_mdw_1.default)(clients_schemas_1.updateClientSchema), client_controllers_1.updateClientController);
clientRoutes.put("/:client_id", verifyClientId_mdw_1.default, verifyToken_mdw_1.default, (0, schemaValidation_mdw_1.default)(clients_schemas_1.createClientSchema), client_controllers_1.updateClientController);
clientRoutes.delete("/:client_id", verifyClientId_mdw_1.default, verifyToken_mdw_1.default, client_controllers_1.deleteClientController);
exports.default = clientRoutes;
//# sourceMappingURL=clients.routes.js.map