import { UseFormRegister } from 'react-hook-form';
import { CSSProperties } from 'styled-components';

export interface IEducation {
  school: string;
  startDate: string;
  startYear: number;
  endDate: string;
  endYear: number;
  subject: string;
  degree: string;
  description: string;
}

export type IEducationNames =
  | 'school'
  | 'startDate'
  | 'startYear'
  | 'endDate'
  | 'endYear'
  | 'subject'
  | 'degree'
  | 'description';

export interface IEducationProps {
  name: IEducationNames;
  title: string;
  placeholder: string;
  educationRegister: UseFormRegister<IEducation>;
  styles: CSSProperties;
}
export interface IEducationData {
  title: string;
  placeholder?: string;
  name: IEducationNames;
  component: (props: IEducationProps) => React.ReactNode;
  styles: CSSProperties;
}
