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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../client");
class ContactRepository {
    constructor() {
        this.prisma = client_1.prisma;
    }
    createContact(id_client, { name, email, phone_number }) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield client_1.prisma.contacts.create({
                data: {
                    name,
                    email,
                    phone_number,
                    id_client,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone_number: true,
                    id_client: true,
                },
            });
            return contact;
        });
    }
    listContacts(id_client) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactList = yield client_1.prisma.contacts.findMany({
                where: {
                    id_client,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone_number: true,
                    id_client: true,
                },
            });
            return contactList;
        });
    }
    getContactById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield client_1.prisma.contacts.findUnique({
                where: {
                    id,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone_number: true,
                    id_client: true,
                },
            });
            return contact;
        });
    }
    updateContact(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client_1.prisma.contacts.update({
                data,
                where: {
                    id,
                },
            });
            return;
        });
    }
    deleteContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client_1.prisma.contacts.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.default = ContactRepository;
//# sourceMappingURL=index.js.map