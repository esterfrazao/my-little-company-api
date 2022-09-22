import {
  IContact,
  IContactRequest,
} from "../../interfaces/contacts.interfaces";
import ContactRepository from "../../repositories/contacts";

const createContactService = async (
  client_id: string,
  data: IContactRequest
): Promise<IContact> => {
  const contactRepository = new ContactRepository();

  const contact = await contactRepository.createContact(client_id, data);

  return contact;
};

export default createContactService;
