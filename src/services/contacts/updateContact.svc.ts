import { IContactUpdate } from "../../interfaces/contacts.interfaces";
import ContactRepository from "../../repositories/contacts";

const updateContactService = async (
  id: string,
  data: IContactUpdate
): Promise<string> => {
  const contactRepository = new ContactRepository();

  await contactRepository.updateContact(id, data);

  return "Contact Successfully Updated";
};

export default updateContactService;
