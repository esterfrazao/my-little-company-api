import { Router } from "express";
import clientRoutes from "./clients.routes";
import sessionRoutes from "./session.routes";

const router = Router();

router.use("/clients", clientRoutes);
router.use(sessionRoutes);

export default router;
