import { UseFormRegister } from 'react-hook-form';

export interface IInformationProps {
  title: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  sectionName: string;
  name: string;
  styles: React.CSSProperties;
}

export interface IInformationData {
  name: string;
  title: string;
  placeholder: string;
  component: (props: IInformationProps) => React.ReactNode;
  sectionName: string;
  styles: React.CSSProperties;
}
