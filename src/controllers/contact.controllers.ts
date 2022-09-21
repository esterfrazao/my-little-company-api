import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.svc";
import deleteContactService from "../services/contacts/deleteContact.svc";
import listClientContactsService from "../services/contacts/listClientContacts";
import readOneContactService from "../services/contacts/readOneContact.svc";
import updateContactService from "../services/contacts/updateContact.svc";

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

export const readOneContactController = async (req: Request, res: Response) => {
  const { contact_id } = req.params;
  const contact = await readOneContactService(contact_id);
  return res.status(200).json(contact);
};

export const updateContactController = async (req: Request, res: Response) => {
  const { contact_id } = req.params;
  const message = await updateContactService(contact_id, req.body);
  return res.status(200).json({ message });
};

export const deleteContactController = async (req: Request, res: Response) => {
  const { contact_id } = req.params;
  await deleteContactService(contact_id);

  return res.status(204).json();
};
