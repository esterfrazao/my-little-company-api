import { PrismaClient } from "@prisma/client";
import { prisma } from "../../client";
import {
  IContactRequest,
  IContact,
  IContactUpdate,
} from "../../interfaces/contacts.interfaces";
import { IContactRepository } from "./IContactRepository";

class ContactRepository implements IContactRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async createContact(
    id_client: string,
    { name, email, phone_number }: IContactRequest
  ): Promise<IContact> {
    const contact = await prisma.contacts.create({
      data: {
        name,
        email,
        phone_number,
        id_client,
      },
    });

    return contact;
  }

  async listContacts(id_client: string): Promise<IContact[]> {
    const contactList = await prisma.contacts.findMany({
      where: {
        id_client,
      },
    });

    return contactList;
  }

  async getContactById(id: string): Promise<IContact | null> {
    const contact = await prisma.contacts.findUnique({
      where: {
        id,
      },
    });

    return contact;
  }

  async updateContact(id: string, data: IContactUpdate): Promise<void> {
    await prisma.contacts.update({
      data,
      where: {
        id,
      },
    });
    return;
  }

  async deleteContact(id: string): Promise<void> {
    await prisma.contacts.delete({
      where: {
        id,
      },
    });
  }
}
