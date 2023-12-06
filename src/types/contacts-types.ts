import { CSSProperties } from "styled-components";
import { IInput } from "./input-types";

export interface IContacts {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: number;
  homeAddress: string;
  zipCode: number;
  city: string;
  photo: FileList;
}

export interface IContactsInitialState {
  user: IContacts | null;
}

export type name =
  | "firstName"
  | "surname"
  | "email"
  | "phoneNumber"
  | "homeAddress"
  | "zipCode"
  | "city"
  | "photo"


export interface ContactsDataType {
  type: string;
  title: string;
  required: boolean;
  placeholder: string;
  name: name;
  component: (props: IInput) => React.ReactNode;
  styles: CSSProperties;
}

export type PartialContactsDataType = Partial<ContactsDataType>;
