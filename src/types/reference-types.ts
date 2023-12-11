import { UseFormRegister } from 'react-hook-form';

export interface ReferenceProps {
  name: string;
  title: string;
  register: UseFormRegister<Record<string, string>>;
  styles?: React.CSSProperties;
}

export interface ReferenceData {
  name: string;
  component: (props: ReferenceProps) => React.ReactNode;
  title: string;
  placeholder?: string;
  styles?: React.CSSProperties;
}
