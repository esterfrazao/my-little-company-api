import { Router } from "express";
import {
  createContactController,
  listClientContactsController,
  readOneContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import schemaValidation from "../middlewares/schemaValidation.mdw";
import verifyContactIdMiddleware from "../middlewares/verifyContactId.mdw";
import verifyTokenMiddleware from "../middlewares/verifyToken.mdw";
import {
  createContactSchema,
  updatePatchContactSchema,
  updatePutContactSchema,
} from "../schemas/contacts.schemas";

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

contactsRoutes.patch(
  "/:contact_id",
  verifyTokenMiddleware,
  verifyContactIdMiddleware,
  schemaValidation(updatePatchContactSchema),
  updateContactController
);

contactsRoutes.put(
  "/:contact_id",
  verifyTokenMiddleware,
  verifyContactIdMiddleware,
  schemaValidation(updatePutContactSchema),
  updateContactController
);

export default contactsRoutes;
