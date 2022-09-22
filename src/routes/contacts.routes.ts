import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listClientContactsController,
  readOneContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import schemaValidation from "../middlewares/schemaValidation.mdw";
import verifyContactIdMiddleware from "../middlewares/verifyContactId.mdw";
import verifyOwnerMiddleware from "../middlewares/verifyOwner.mdw";
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
  verifyOwnerMiddleware,
  readOneContactController
);

contactsRoutes.patch(
  "/:contact_id",
  verifyTokenMiddleware,
  verifyContactIdMiddleware,
  verifyOwnerMiddleware,
  schemaValidation(updatePatchContactSchema),
  updateContactController
);

contactsRoutes.put(
  "/:contact_id",
  verifyTokenMiddleware,
  verifyContactIdMiddleware,
  verifyOwnerMiddleware,
  schemaValidation(updatePutContactSchema),
  updateContactController
);

contactsRoutes.delete(
  "/:contact_id",
  verifyTokenMiddleware,
  verifyContactIdMiddleware,
  verifyOwnerMiddleware,
  deleteContactController
);

export default contactsRoutes;
