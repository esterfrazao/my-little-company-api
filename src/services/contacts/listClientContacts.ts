import { IContact } from "../../interfaces/contacts.interfaces";
import ContactRepository from "../../repositories/contacts";

const listClientContactsService = async (
  client_id: string
): Promise<IContact[]> => {
  const contactRepository = new ContactRepository();

  const contactsList = await contactRepository.listContacts(client_id);

  return contactsList;
};

export default listClientContactsService;
