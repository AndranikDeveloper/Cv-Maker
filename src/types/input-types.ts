import { Dispatch, SetStateAction } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { CSSProperties } from 'styled-components';

export interface IInput {
  type?: string;
  title: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  register: UseFormRegister<Record<string, string>>;
  styles?: CSSProperties;
  validate?: (register: UseFormRegister<Record<string, string>>) => void;
  setImg?: Dispatch<SetStateAction<string>>
  img?: string
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


