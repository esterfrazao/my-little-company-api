import { hash } from "bcrypt";
import AppError from "../../errors/AppError";
import { IClient, IClientUpdate } from "../../interfaces/clients.interfaces";
import ClientRepository from "../../repositories/clients";

const updateClientService = async (
  id: string,
  data: IClientUpdate,
  user: IClient
): Promise<string> => {
  const clientRepository = new ClientRepository();

  const client = await clientRepository.getClientById(id);

  if (client!.id !== user.id)
    throw new AppError(403, "You do not have permission!");

  if (data.email) {
    const emailIsUnavailable = await clientRepository.getClientbyEmail(
      data.email
    );
    if (emailIsUnavailable && data.email !== client!.email)
      throw new AppError(400, "This email is already being used!");
  }

  if (data.password) {
    data.password = await hash(data.password, 10);
  }

  await clientRepository.updateClient(id, data);

  return "Client Updated Successfully";
};

export default updateClientService;
