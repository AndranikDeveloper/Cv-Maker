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
  | 'firstName'
  | 'surname'
  | 'email'
  | 'phoneNumber'
  | 'homeAddress'
  | 'zipCode'
  | 'city';

export interface ContactsDataType {
  title: string;
  required: boolean;
  placeholder: string;
  name: name;
}
