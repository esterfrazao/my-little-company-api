import { IContact } from "./contacts.interfaces";

export interface IClientRequest {
  name: string;
  email: string;
  password: string;
  phone_number: string;
}

export interface IClientUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone_number?: string;
}

export interface IClient extends Omit<IClientRequest, "password"> {
  id: string;
  created_at: Date;
}

export interface ICLientWithPassword extends IClient {
  password: string;
}
