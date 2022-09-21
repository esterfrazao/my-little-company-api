import { Router } from "express";
import clientRoutes from "./clients.routes";
import contactsRoutes from "./contacts.routes";
import sessionRoutes from "./session.routes";

const router = Router();

router.use("/clients", clientRoutes);
router.use(sessionRoutes);
router.use(contactsRoutes);

export default router;
