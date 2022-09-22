"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactController = exports.updateContactController = exports.readOneContactController = exports.listClientContactsController = exports.createContactController = void 0;
const createContact_svc_1 = __importDefault(require("../services/contacts/createContact.svc"));
const deleteContact_svc_1 = __importDefault(require("../services/contacts/deleteContact.svc"));
const listClientContacts_1 = __importDefault(require("../services/contacts/listClientContacts"));
const readOneContact_svc_1 = __importDefault(require("../services/contacts/readOneContact.svc"));
const updateContact_svc_1 = __importDefault(require("../services/contacts/updateContact.svc"));
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const newContact = yield (0, createContact_svc_1.default)(id, req.body);
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
const listClientContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const contactsList = yield (0, listClientContacts_1.default)(id);
    return res.status(200).json(contactsList);
});
exports.listClientContactsController = listClientContactsController;
const readOneContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { contact_id } = req.params;
    const contact = yield (0, readOneContact_svc_1.default)(contact_id);
    return res.status(200).json(contact);
});
exports.readOneContactController = readOneContactController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { contact_id } = req.params;
    const message = yield (0, updateContact_svc_1.default)(contact_id, req.body);
    return res.status(200).json({ message });
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { contact_id } = req.params;
    yield (0, deleteContact_svc_1.default)(contact_id);
    return res.status(204).json();
});
exports.deleteContactController = deleteContactController;
//# sourceMappingURL=contact.controllers.js.map