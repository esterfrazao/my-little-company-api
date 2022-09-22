"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controllers_1 = require("../controllers/contact.controllers");
const schemaValidation_mdw_1 = __importDefault(require("../middlewares/schemaValidation.mdw"));
const verifyContactId_mdw_1 = __importDefault(require("../middlewares/verifyContactId.mdw"));
const verifyOwner_mdw_1 = __importDefault(require("../middlewares/verifyOwner.mdw"));
const verifyToken_mdw_1 = __importDefault(require("../middlewares/verifyToken.mdw"));
const contacts_schemas_1 = require("../schemas/contacts.schemas");
const contactsRoutes = (0, express_1.Router)();
contactsRoutes.post("/", verifyToken_mdw_1.default, (0, schemaValidation_mdw_1.default)(contacts_schemas_1.createContactSchema), contact_controllers_1.createContactController);
contactsRoutes.get("/", verifyToken_mdw_1.default, contact_controllers_1.listClientContactsController);
contactsRoutes.get("/:contact_id", verifyToken_mdw_1.default, verifyContactId_mdw_1.default, verifyOwner_mdw_1.default, contact_controllers_1.readOneContactController);
contactsRoutes.patch("/:contact_id", verifyToken_mdw_1.default, verifyContactId_mdw_1.default, verifyOwner_mdw_1.default, (0, schemaValidation_mdw_1.default)(contacts_schemas_1.updatePatchContactSchema), contact_controllers_1.updateContactController);
contactsRoutes.put("/:contact_id", verifyToken_mdw_1.default, verifyContactId_mdw_1.default, verifyOwner_mdw_1.default, (0, schemaValidation_mdw_1.default)(contacts_schemas_1.updatePutContactSchema), contact_controllers_1.updateContactController);
contactsRoutes.delete("/:contact_id", verifyToken_mdw_1.default, verifyContactId_mdw_1.default, verifyOwner_mdw_1.default, contact_controllers_1.deleteContactController);
exports.default = contactsRoutes;
//# sourceMappingURL=contacts.routes.js.map