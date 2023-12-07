import { UseFormRegister } from "react-hook-form";
import { IWorkComponentsProps } from "./work-experience-types";

export interface IInformationProps {
    title: string;
    placeholder?: string;
    register?: UseFormRegister<{ referenceInfo: never[]; }>;
    sectionName: string;
    name: string
    styles: React.CSSProperties
}


export interface IInformationData {
    name: string;
    title?: string;
    placeholder?: string;
    component?: (props: IInformationProps | IWorkComponentsProps) => React.ReactNode
    sectionName?: string;
    styles: React.CSSProperties
}