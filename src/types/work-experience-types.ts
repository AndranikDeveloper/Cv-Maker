import { UseFormRegister } from "react-hook-form";
import { CSSProperties } from "styled-components";

export interface IWorkExperienceInitialState {
  userWorks: IUserWorks | null;
}

export interface IDates {
  month: string;
  year: number
}

export interface IUserWorks {
  employer: string;
  startDate: string;
  endDate: string;
  startYear: string
  endYear: string
  jobTitle: string;
  location: string;
  description: string;
}

export type IWorkNames = "employer" | "startDate" | "startYear" | "endDate"  | "endYear" |  "jobTitle" | "location" | "description"

export interface IWorkComponentsProps {
  title: string;
  placeholder?: string;
  name: IWorkNames;
  styles: CSSProperties;
  workRegister: UseFormRegister<IUserWorks>;
}

export interface IWorkData {
  title: string;
  placeholder?: string;
  name: IWorkNames;
  styles: CSSProperties;
  component: (props: IWorkComponentsProps) => React.ReactNode
}
