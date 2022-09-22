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
const contacts_1 = __importDefault(require("../repositories/contacts"));
const verifyOwnerMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { contact_id } = req.params;
    const contactRepository = new contacts_1.default();
    const contactOwner = (yield contactRepository.getContactById(contact_id))
        .id_client;
    if (contactOwner !== req.user.id)
        throw new AppError_1.default(403, "You do not have permission");
    next();
});
exports.default = verifyOwnerMiddleware;
//# sourceMappingURL=verifyOwner.mdw.js.map