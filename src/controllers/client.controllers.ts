import { Request, Response } from "express";
import createClientService from "../services/clients/createClient.svc";

export const createClientController = async (req: Request, res: Response) => {
  const newClient = await createClientService(req.body);

  return res.status(201).json(newClient);
};
