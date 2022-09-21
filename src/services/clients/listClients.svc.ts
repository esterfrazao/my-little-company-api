import { IClient } from "../../interfaces/clients.interfaces";
import ClientRepository from "../../repositories/clients";

const listClientsService = async (): Promise<IClient[]> => {
  const clientRepository = new ClientRepository();
  const clientsList = await clientRepository.listClients();
  return clientsList;
};

export default listClientsService;
