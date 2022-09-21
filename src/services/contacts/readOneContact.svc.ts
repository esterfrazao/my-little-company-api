import { IContact } from "../../interfaces/contacts.interfaces";
import ContactRepository from "../../repositories/contacts";

const readOneContactService = async (id: string): Promise<IContact> => {
  const contactRepository = new ContactRepository();

  const contact = await contactRepository.getContactById(id);

  return contact!;
};

export default readOneContactService;
