export type name =
  | "firstName"
  | "surname"
  | "email"
  | "phoneNumber"
  | "homeAddress"
  | "zipCode"
  | "city";

interface ContactsDataType {
  title: string;
  required: boolean;
  placeholder: string;
  name: name;
}

export const contactsData: ContactsDataType[] = [
  {
    title: "First Name",
    required: true,
    placeholder: "Violet",
    name: "firstName",
  },
  {
    title: "Surname",
    required: true,
    placeholder: "Morrison",
    name: "surname",
  },
  {
    title: "Email Address",
    required: true,
    placeholder: "name@example.com",
    name: "email",
  },
  {
    title: "Phone Number",
    required: false,
    placeholder: "+123456789",
    name: "phoneNumber",
  },
  {
    title: "Home Address",
    required: false,
    placeholder: "4586  McDonald Avenue",
    name: "homeAddress",
  },
  {
    title: "Zip Code",
    required: false,
    placeholder: "34741",
    name: "zipCode",
  },
  {
    title: "City/Town",
    required: false,
    placeholder: " Kissimmee/FL",
    name: "city",
  },
];

export const fisrtInputs = contactsData.slice(0, 2);
export const secondInputs = contactsData.slice(2, 5);
export const thirdInputs = contactsData.slice(5, contactsData.length);
