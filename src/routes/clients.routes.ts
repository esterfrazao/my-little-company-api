import { Router } from "express";
import {
  createClientController,
  listClientsController,
  readProfileController,
} from "../controllers/client.controllers";
import schemaValidation from "../middlewares/schemaValidation.mdw";
import verifyTokenMiddleware from "../middlewares/verifyToken.mdw";
import { createClientSchema } from "../schemas/clients.schemas";

const clientRoutes = Router();

clientRoutes.post(
  "/register",
  schemaValidation(createClientSchema),
  createClientController
);

clientRoutes.get("/", listClientsController);

clientRoutes.get("/profile", verifyTokenMiddleware, readProfileController);

export default clientRoutes;
