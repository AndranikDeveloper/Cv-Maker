import { UseFormRegister } from 'react-hook-form';
import { CSSProperties } from 'styled-components';

export interface IInput {
  type?: string;
  title: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  register: UseFormRegister<IContactsInfo>;
  styles?: CSSProperties;
  validate?: (register: UseFormRegister<IContactsInfo>) => void;
}
export interface IContactsInfo {
  firstName: string;
  surname: string;
  email: string;
  phoneNumber: number;
  homeAddress: string;
  zipCode: number;
  city: string;
  photo: FileList;
}

export interface IInputProps {
  inputData: IInput[];
}
