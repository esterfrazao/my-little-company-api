import { Request, Response } from "express";
import createClientService from "../services/clients/createClient.svc";
import listClientsService from "../services/clients/listClients.svc";

export const createClientController = async (req: Request, res: Response) => {
  const newClient = await createClientService(req.body);

  return res.status(201).json(newClient);
};

export const listClientsController = async (req: Request, res: Response) => {
  const clientsList = await listClientsService();

  return res.status(200).json(clientsList);
};

export const readProfileController = (req: Request, res: Response) => {
  return res.status(200).json(req.user);
};
