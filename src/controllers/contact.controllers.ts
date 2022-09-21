import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.svc";

export const createContactController = async (req: Request, res: Response) => {
  const { id } = req.user;

  const newContact = await createContactService(id, req.body);

  return res.status(201).json(newContact);
};
