export interface IContacts {
    id: number;
    image?: string;
    firstName: string;
    surname: string;
    email: string;
    phoneNumber?: number;
    homeAddress?: string;
    zipCode?: number;
    city: string;
}

export interface IContactsInitialState {
    user: IContacts | null
}