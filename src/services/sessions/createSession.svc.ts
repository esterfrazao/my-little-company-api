import AppError from "../../errors/AppError";
import {
  ILoginRequest,
  ILoginResponse,
} from "../../interfaces/sessions.interfaces";
import ClientRepository from "../../repositories/clients";
import jwt, { Secret } from "jsonwebtoken";
import "dotenv/config";
import { compare } from "bcrypt";

const createSessionService = async ({
  email,
  password,
}: ILoginRequest): Promise<ILoginResponse> => {
  const clientRepository = new ClientRepository();

  const client = await clientRepository.getClientbyEmail(email);
  if (!client) throw new AppError(400, "Invalid Email/Password");

  const checkPassword = await compare(password, client.password);

  if (!checkPassword) throw new AppError(400, "Invalid Email/Password");

  const token = jwt.sign(
    { id: client.id, email: client.email },
    <Secret>process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  return { token };
};

export default createSessionService;
