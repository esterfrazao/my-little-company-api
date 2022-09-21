import { Router } from "express";
import { createContactController } from "../controllers/contact.controllers";
import schemaValidation from "../middlewares/schemaValidation.mdw";
import verifyTokenMiddleware from "../middlewares/verifyToken.mdw";
import { createContactSchema } from "../schemas/contacts.schemas";

const contactsRoutes = Router();

contactsRoutes.post(
  "/",
  verifyTokenMiddleware,
  schemaValidation(createContactSchema),
  createContactController
);

export default contactsRoutes;
