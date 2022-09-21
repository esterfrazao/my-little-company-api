import { IClient } from "../../interfaces/clients.interfaces";
import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: IClient;
    }
  }
}
