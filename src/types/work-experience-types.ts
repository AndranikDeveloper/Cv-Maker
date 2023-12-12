import { UseFormRegister } from 'react-hook-form';
import { CSSProperties } from 'styled-components';

export interface IWorkExperienceInitialState {
  userWorks: IUserWorks | null;
}

export interface IDates {
  month: string;
  year: number;
}

export interface IUserWorks {
  employer: string;
  startDate: string;
  endDate: string;
  startYear: string;
  endYear: string;
  jobTitle: string;
  location: string;
  description: string;
}

export interface IWorkComponentsProps {
  type?: string;
  required?: boolean;
  title: string;
  placeholder?: string;
  name: string;
  styles?: CSSProperties;
  register: UseFormRegister<Record<string, string>>;
  validate?: (register: UseFormRegister<Record<string, string>>) => void;
  defaultValue?: string;
}

export interface IWorkData {
  type?: string;
  required?: boolean;
  title: string;
  placeholder: string;
  name: string;
  styles: CSSProperties;
  component: (props: IWorkComponentsProps) => React.ReactNode;
  defaultValue?: string;
}
