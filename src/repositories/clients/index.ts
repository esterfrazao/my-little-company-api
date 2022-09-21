import { PrismaClient } from "@prisma/client";
import { prisma } from "../../client";
import {
  IClientRequest,
  IClient,
  IClientUpdate,
} from "../../interfaces/clients.interfaces";
import { IClientRepository } from "./IClientRepository";
import { hash } from "bcrypt";

class ClientRepository implements IClientRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async createClient({
    name,
    email,
    password,
    phone_number,
  }: IClientRequest): Promise<IClient> {
    const hashedPassword = await hash(password, 10);
    const client = await prisma.clients.create({
      data: {
        name,
        email,
        password: hashedPassword,
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
  }

  async listClients(): Promise<IClient[]> {
    const clients = await prisma.clients.findMany();
    return clients;
  }

  async readProfilebyId(id: string): Promise<IClient> {
    const client = await prisma.clients.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return client;
  }

  async getClientbyEmail(email: string): Promise<IClient> {
    const client = await prisma.clients.findUniqueOrThrow({
      where: {
        email,
      },
    });
    return client;
  }

  async updateClient(id: string, data: IClientUpdate): Promise<void> {
    if (data.password) {
      data.password = await hash(data.password, 10);
    }
    await prisma.clients.update({
      data,
      where: {
        id,
      },
    });

    return;
  }

  async deleteClient(id: string): Promise<void> {
    await prisma.clients.delete({
      where: {
        id,
      },
    });
    return;
  }
}

export default ClientRepository;
