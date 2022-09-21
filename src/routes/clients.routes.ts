import { Router } from "express";
import {
  createClientController,
  listClientsController,
} from "../controllers/client.controllers";
import schemaValidation from "../middlewares/schemaValidation.mdw";
import { createClientSchema } from "../schemas/clients.schemas";

const clientRoutes = Router();

clientRoutes.post(
  "/register",
  schemaValidation(createClientSchema),
  createClientController
);

clientRoutes.get("/clients", listClientsController);

export default clientRoutes;
