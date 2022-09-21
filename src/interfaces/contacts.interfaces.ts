export interface IContactRequest {
  name: string;
  email: string | null;
  phone_number: string | null;
}

export interface IContact extends IContactRequest {
  id: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone_number?: string;
}
