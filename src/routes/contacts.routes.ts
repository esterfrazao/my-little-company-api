import { Router } from "express";
import {
  createContactController,
  listClientContactsController,
  readOneContactController,
} from "../controllers/contact.controllers";
import schemaValidation from "../middlewares/schemaValidation.mdw";
import verifyContactIdMiddleware from "../middlewares/verifyContactId.mdw";
import verifyTokenMiddleware from "../middlewares/verifyToken.mdw";
import { createContactSchema } from "../schemas/contacts.schemas";

const contactsRoutes = Router();

contactsRoutes.post(
  "/",
  verifyTokenMiddleware,
  schemaValidation(createContactSchema),
  createContactController
);

contactsRoutes.get("/", verifyTokenMiddleware, listClientContactsController);

contactsRoutes.get(
  "/:contact_id",
  verifyTokenMiddleware,
  verifyContactIdMiddleware,
  readOneContactController
);

export default contactsRoutes;
