import AppError from "../../errors/AppError";
import { IClient } from "../../interfaces/clients.interfaces";
import ClientRepository from "../../repositories/clients";

const deleteClientService = async (
  id: string,
  user: IClient
): Promise<void> => {
  const clientRepository = new ClientRepository();

  const client = await clientRepository.getClientById(id);

  if (client!.id !== user.id)
    throw new AppError(403, "You do not have permission!");

  await clientRepository.deleteClient(id);

  return;
};

export default deleteClientService;
