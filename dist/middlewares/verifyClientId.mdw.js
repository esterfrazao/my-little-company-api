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
const AppError_1 = __importDefault(require("../errors/AppError"));
const clients_1 = __importDefault(require("../repositories/clients"));
const verifyClientIdMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = req.params.client_id;
    if (!clientId)
        throw new AppError_1.default(400, "Missing Client Id");
    const clientRepository = new clients_1.default();
    const client = yield clientRepository.getClientById(clientId);
    if (!client) {
        throw new AppError_1.default(404, "Client not found");
    }
    next();
});
exports.default = verifyClientIdMiddleware;
//# sourceMappingURL=verifyClientId.mdw.js.map