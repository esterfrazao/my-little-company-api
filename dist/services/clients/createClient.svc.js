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
const bcrypt_1 = require("bcrypt");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const clients_1 = __importDefault(require("../../repositories/clients"));
const createClientService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = new clients_1.default();
    data.password = yield (0, bcrypt_1.hash)(data.password, 10);
    const emailAlreadyExists = yield clientRepository.getClientbyEmail(data.email);
    if (emailAlreadyExists)
        throw new AppError_1.default(400, "This email is already being used");
    const newClient = yield clientRepository.createClient(data);
    return newClient;
});
exports.default = createClientService;
//# sourceMappingURL=createClient.svc.js.map