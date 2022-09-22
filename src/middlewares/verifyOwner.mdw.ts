import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import ContactRepository from "../repositories/contacts";

const verifyOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { contact_id } = req.params;

  const contactRepository = new ContactRepository();

  const contactOwner = (await contactRepository.getContactById(contact_id))!
    .id_client;

  if (contactOwner !== req.user.id)
    throw new AppError(403, "You do not have permission");

  next();
};

export default verifyOwnerMiddleware;
