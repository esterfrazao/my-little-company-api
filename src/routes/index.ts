import { Router } from "express";
import clientRoutes from "./clients.routes";

const router = Router();

router.use(clientRoutes);

export default router;
