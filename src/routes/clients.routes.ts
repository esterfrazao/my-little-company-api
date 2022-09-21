import { Router } from "express";
import { createClientController } from "../controllers/client.controllers";
import schemaValidation from "../middlewares/schemaValidation.mdw";
import { createClientSchema } from "../schemas/clients.schemas";

const clientRoutes = Router();

clientRoutes.post(
  "/register",
  schemaValidation(createClientSchema),
  createClientController
);

export default clientRoutes;
