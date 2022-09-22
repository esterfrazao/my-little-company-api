import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import ContactRepository from "../repositories/contacts";

const verifyContactIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactId = req.params.contact_id;

  if (!contactId) throw new AppError(400, "Missing Contact Id");

  const contactRepository = new ContactRepository();

  const contact = await contactRepository.getContactById(contactId);

  if (!contact) throw new AppError(404, "Contact not found");

  next();
};

export default verifyContactIdMiddleware;
