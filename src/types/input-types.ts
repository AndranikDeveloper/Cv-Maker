import { UseFormRegister } from "react-hook-form";
import { name } from "../utils/contacts-services";

export interface IInput {
    title: string;
    required: boolean;
    placeholder: string;
    name: name;
    register: UseFormRegister<IContactsInfo>
}
export interface IContactsInfo {
    firstName: string,
    surname: string,
    email: string,
    phoneNumber: number,
    homeAddress: string,
    zipCode: number,
    city: string;
    photo: FileList
}

export interface IInputProps {
    inputData: IInput[]
}

