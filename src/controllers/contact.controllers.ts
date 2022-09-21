import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.svc";
import listClientContactsService from "../services/contacts/listClientContacts";

export const createContactController = async (req: Request, res: Response) => {
  const { id } = req.user;

  const newContact = await createContactService(id, req.body);

  return res.status(201).json(newContact);
};

export const listClientContactsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.user;

  const contactsList = await listClientContactsService(id);

  return res.status(200).json(contactsList);
};
