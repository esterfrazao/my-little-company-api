import {
  IContact,
  IContactRequest,
  IContactUpdate,
} from "../../interfaces/contacts.interfaces";

export interface IContactRepository {
  createContact(
    id_client: string,
    { name, email, phone_number }: IContactRequest
  ): Promise<IContact>;

  listContacts(id_client: string): Promise<IContact[]>;

  getContactById(id: string): Promise<IContact | null>;

  updateContact(id: string, data: IContactUpdate): Promise<void>;

  deleteContact(id: string): Promise<void>;
}
