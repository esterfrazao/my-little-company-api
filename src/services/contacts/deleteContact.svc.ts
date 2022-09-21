import ContactRepository from "../../repositories/contacts";

const deleteContactService = async (id: string): Promise<void> => {
  const contactRepository = new ContactRepository();

  await contactRepository.deleteContact(id);

  return;
};

export default deleteContactService;
