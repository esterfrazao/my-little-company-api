import {
  IClient,
  IClientRequest,
  IClientUpdate,
} from "../../interfaces/clients.interfaces";

export interface IClientRepository {
  createClient({
    name,
    email,
    password,
    phone_number,
  }: IClientRequest): Promise<IClient>;

  listClients(): Promise<IClient[]>;

  getClientById(id: string): Promise<IClient | null>;

  getClientbyEmail(email: string): Promise<IClient | null>;

  updateClient(id: string, data: IClientUpdate): Promise<void>;

  deleteClient(id: string): Promise<void>;
}
