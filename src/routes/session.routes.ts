import { Router } from "express";
import { createSessionController } from "../controllers/session.controller";
import schemaValidation from "../middlewares/schemaValidation.mdw";
import { createSessionSchema } from "../schemas/session.schema";

const sessionRoutes = Router();

sessionRoutes.post(
  "/login",
  schemaValidation(createSessionSchema),
  createSessionController
);

export default sessionRoutes;
