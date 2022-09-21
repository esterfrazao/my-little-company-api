import { PrismaClient } from "@prisma/client";
import { prisma } from "../../client";
import {
  IClientRequest,
  IClient,
  IClientUpdate,
} from "../../interfaces/clients.interfaces";
import { IClientRepository } from "./IClientRepository";

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
    const client = await prisma.clients.create({
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
  }

  async listClients(): Promise<IClient[]> {
    const clients = await prisma.clients.findMany();
    return clients;
  }

  async getClientById(id: string): Promise<IClient | null> {
    const client = await prisma.clients.findUnique({
      where: {
        id,
      },
    });
    return client;
  }

  async getClientbyEmail(email: string): Promise<IClient | null> {
    const client = await prisma.clients.findUnique({
      where: {
        email,
      },
    });
    return client;
  }

  async updateClient(id: string, data: IClientUpdate): Promise<void> {
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
