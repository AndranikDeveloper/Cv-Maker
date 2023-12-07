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


export interface IEducationProps {
  name: string;
  title: string;
  placeholder: string;
  register: UseFormRegister<Record<string, string>>;
  styles: CSSProperties;
}
export interface IEducationData {
  required?: boolean;
  type?: string
  title: string;
  placeholder: string;
  name: string;
  component: (props: IEducationProps) => React.ReactNode;
  styles: CSSProperties;
}
