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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const clients_1 = __importDefault(require("../repositories/clients"));
const verifyTokenMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = Object.assign({}, req.headers);
    if (!authorization)
        return res.status(401).json({ message: "Missing authorization" });
    const token = authorization.split(" ")[1];
    jsonwebtoken_1.default.verify(token, `${process.env.SECRET_KEY}`, (error, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            return res.status(400).json({ message: "Invalid Token" });
        }
        const clientRepository = new clients_1.default();
        const client = yield clientRepository.getClientById(decoded.id);
        req.user = client;
        next();
    }));
});
exports.default = verifyTokenMiddleware;
//# sourceMappingURL=verifyToken.mdw.js.map