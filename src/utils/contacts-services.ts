import { UseFormReset } from 'react-hook-form';
import { AppDispatch } from '../store/store';
import { ContactsDataType } from '../types/contacts-types';
import { IContactsInfo } from '../types/input-types';
import { createCv } from '../store/contactsSlice';
export const contactsData: ContactsDataType[] = [
  {
    title: 'First Name',
    required: true,
    placeholder: 'Violet',
    name: 'firstName',
  },
  {
    title: 'Surname',
    required: true,
    placeholder: 'Morrison',
    name: 'surname',
  },
  {
    title: 'Email Address',
    required: true,
    placeholder: 'name@example.com',
    name: 'email',
  },
  {
    title: 'Phone Number',
    required: false,
    placeholder: '+123456789',
    name: 'phoneNumber',
  },
  {
    title: 'Home Address',
    required: false,
    placeholder: '4586  McDonald Avenue',
    name: 'homeAddress',
  },
  {
    title: 'Zip Code',
    required: false,
    placeholder: '34741',
    name: 'zipCode',
  },
  {
    title: 'City/Town',
    required: false,
    placeholder: ' Kissimmee/FL',
    name: 'city',
  },
];

export const firstInputs = contactsData.slice(0, 2);
export const secondInputs = contactsData.slice(2, 5);
export const thirdInputs = contactsData.slice(5, contactsData.length);

export function createUser(
  dispatch: AppDispatch,
  data: IContactsInfo,
  reset: UseFormReset<IContactsInfo>
) {
  console.log(data);
  dispatch(createCv(data));
  reset();
}
