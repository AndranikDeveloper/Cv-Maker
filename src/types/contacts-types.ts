import { CSSProperties } from 'styled-components';
import { IInput } from './input-types';

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

export interface IUserInitialState {
  user: Record<string, string> | null;
}

export interface DataType {
  type?: string;
  title: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  component: (props: IInput) => React.ReactNode;
  styles: CSSProperties;
}
