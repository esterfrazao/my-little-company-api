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
class ClientRepository {
    constructor() {
        this.prisma = client_1.prisma;
    }
    createClient({ name, email, password, phone_number, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield client_1.prisma.clients.create({
                data: {
                    name,
                    email,
                    password,
                    phone_number,
                    created_at: new Date(),
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone_number: true,
                    created_at: true,
                },
            });
            return client;
        });
    }
    listClients() {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield client_1.prisma.clients.findMany({
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone_number: true,
                    created_at: true,
                },
            });
            return clients;
        });
    }
    getClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield client_1.prisma.clients.findUnique({
                where: {
                    id,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone_number: true,
                    created_at: true,
                },
            });
            return client;
        });
    }
    getClientbyEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield client_1.prisma.clients.findUnique({
                where: {
                    email,
                },
            });
            return client;
        });
    }
    updateClient(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client_1.prisma.clients.update({
                data,
                where: {
                    id,
                },
            });
            return;
        });
    }
    deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client_1.prisma.clients.delete({
                where: {
                    id,
                },
            });
            return;
        });
    }
}
exports.default = ClientRepository;
//# sourceMappingURL=index.js.map