import { hash } from "bcrypt";
import AppError from "../../errors/AppError";
import { IClient, IClientRequest } from "../../interfaces/clients.interfaces";
import ClientRepository from "../../repositories/clients";

const createClientService = async (data: IClientRequest): Promise<IClient> => {
  const clientRepository = new ClientRepository();
  data.password = await hash(data.password, 10);

  const emailAlreadyExists = await clientRepository.getClientbyEmail(
    data.email
  );

  if (emailAlreadyExists)
    throw new AppError(400, "This email is already being used");

  const newClient = await clientRepository.createClient(data);

  return newClient;
};

export default createClientService;
