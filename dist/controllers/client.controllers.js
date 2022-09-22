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
exports.deleteClientController = exports.updateClientController = exports.readProfileController = exports.listClientsController = exports.createClientController = void 0;
const createClient_svc_1 = __importDefault(require("../services/clients/createClient.svc"));
const deleteClient_svc_1 = __importDefault(require("../services/clients/deleteClient.svc"));
const listClients_svc_1 = __importDefault(require("../services/clients/listClients.svc"));
const updateClient_svc_1 = __importDefault(require("../services/clients/updateClient.svc"));
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newClient = yield (0, createClient_svc_1.default)(req.body);
    return res.status(201).json(newClient);
});
exports.createClientController = createClientController;
const listClientsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientsList = yield (0, listClients_svc_1.default)();
    return res.status(200).json(clientsList);
});
exports.listClientsController = listClientsController;
const readProfileController = (req, res) => {
    return res.status(200).json(req.user);
};
exports.readProfileController = readProfileController;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { client_id } = req.params;
    const message = yield (0, updateClient_svc_1.default)(client_id, req.body, req.user);
    return res.status(200).json({ message });
});
exports.updateClientController = updateClientController;
const deleteClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { client_id } = req.params;
    yield (0, deleteClient_svc_1.default)(client_id, req.user);
    return res.status(204).send();
});
exports.deleteClientController = deleteClientController;
//# sourceMappingURL=client.controllers.js.map