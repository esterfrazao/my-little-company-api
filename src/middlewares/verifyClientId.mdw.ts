import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import ClientRepository from "../repositories/clients";

const verifyClientIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientId = req.params.client_id;

  if (!clientId) throw new AppError(400, "Missing Client Id");

  const clientRepository = new ClientRepository();

  const client = await clientRepository.getClientById(clientId);

  if (!client) {
    throw new AppError(404, "Client not found");
  }

  next();
};

export default verifyClientIdMiddleware;
