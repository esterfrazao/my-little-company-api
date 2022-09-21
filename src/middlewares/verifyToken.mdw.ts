import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import ClientRepository from "../repositories/clients";

const verifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = { ...req.headers };

  if (!authorization)
    return res.status(401).json({ message: "Missing authorization" });

  const token = authorization.split(" ")[1];
  jwt.verify(
    token,
    `${process.env.SECRET_KEY}`,
    async (error: any, decoded: any) => {
      if (error) {
        return res.status(400).json({ message: "Invalid Token" });
      }

      const clientRepository = new ClientRepository();

      const client = await clientRepository.getClientById(decoded.id);

      req.user = client!;

      next();
    }
  );
};

export default verifyTokenMiddleware;
