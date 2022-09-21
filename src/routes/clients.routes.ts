import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientsController,
  readProfileController,
  updateClientController,
} from "../controllers/client.controllers";
import schemaValidation from "../middlewares/schemaValidation.mdw";
import verifyClientIdMiddleware from "../middlewares/verifyClientId.mdw";
import verifyTokenMiddleware from "../middlewares/verifyToken.mdw";
import {
  createClientSchema,
  updateClientSchema,
} from "../schemas/clients.schemas";

const clientRoutes = Router();

clientRoutes.post(
  "/register",
  schemaValidation(createClientSchema),
  createClientController
);

clientRoutes.get("/", listClientsController);

clientRoutes.get("/profile", verifyTokenMiddleware, readProfileController);

clientRoutes.patch(
  "/:client_id",
  verifyClientIdMiddleware,
  verifyTokenMiddleware,
  schemaValidation(updateClientSchema),
  updateClientController
);

clientRoutes.put(
  "/:client_id",
  verifyClientIdMiddleware,
  verifyTokenMiddleware,
  schemaValidation(createClientSchema),
  updateClientController
);

clientRoutes.delete(
  "/:client_id",
  verifyClientIdMiddleware,
  verifyTokenMiddleware,
  deleteClientController
);

export default clientRoutes;
