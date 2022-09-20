import "express-async-errors";
import cors from "cors";
import express from "express";
import handleAppError from "./middlewares/handleAppError.mdw";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(handleAppError);

export default app;
