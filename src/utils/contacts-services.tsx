import { UseFormReset } from 'react-hook-form';
import { AppDispatch } from '../store/store';
import { DataType, name } from '../types/contacts-types';
import { IContactsInfo, IInput } from '../types/input-types';
import { createContacts } from '../store/contactsSlice';
import { Input } from '../components/contacts-input/index';
import { SelectFile } from '../components/select-contact-img';
import { NavigateFunction } from 'react-router-dom';

export function validateEmail(name: name) {
  const validation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (name === 'email') {
    return { pattern: { value: validation, message: 'Enter Right Email' } };
  } else {
    return { pattern: { value: /^(.|[\r\n])*$/s, message: '' } };
  }
}

export const contactsData: DataType[] = [
  {
    name: 'photo',
    component: (props: IInput) => <SelectFile {...props} />,
    required: false,
    title: 'select-file',
    placeholder: '',
    type: 'file',
    styles: {
      width: '99px',
      height: '121px',
      backgroundColor: '#C4C4C4',
      borderRadius: '10px',
      gridArea: '1 / 1 / 3 / 2',
    },
  },
  {
    type: 'text',
    title: 'First Name',
    required: true,
    placeholder: 'Violet',
    name: 'firstName',
    component: (props: IInput) => <Input {...props} />,
    styles: {
      width: '218px',
      gridArea: '1 / 2 / 2 / 4',
    },
  },
  {
    type: 'text',
    title: 'Surname',
    required: true,
    placeholder: 'Morrison',
    name: 'surname',
    component: (props: IInput) => <Input {...props} />,
    styles: {
      width: '218px',
      gridArea: '2 / 2 / 3 / 4',
    },
  },
  {
    type: 'text',
    title: 'Email Address',
    required: true,
    placeholder: 'name@example.com',
    name: 'email',
    component: (props: IInput) => <Input {...props} />,
    styles: {
      width: '328px',
      gridArea: '3 / 1 / 4 / 4',
    },
  },
  {
    type: 'number',
    title: 'Phone Number',
    required: false,
    placeholder: '+123456789',
    name: 'phoneNumber',
    component: (props: IInput) => <Input {...props} />,
    styles: {
      width: '328px',
      gridArea: '4 / 1 / 5 / 4',
    },
  },
  {
    type: 'text',
    title: 'Home Address',
    required: false,
    placeholder: '4586  McDonald Avenue',
    name: 'homeAddress',
    component: (props: IInput) => <Input {...props} />,
    styles: {
      width: '328px',
      gridArea: '5 / 1 / 6 / 4',
    },
  },
  {
    type: 'number',
    title: 'Zip Code',
    required: false,
    placeholder: '34741',
    name: 'zipCode',
    component: (props: IInput) => <Input {...props} />,
    styles: {
      width: '110px',
      gridArea: '6 / 1 / 7 / 2',
    },
  },
  {
    type: 'text',
    title: 'City/Town',
    required: false,
    placeholder: ' Kissimmee/FL',
    name: 'city',
    component: (props: IInput) => <Input {...props} />,
    styles: {
      width: '194px',
      gridArea: ' 6 / 2 / 7 / 4',
      marginLeft: '20px',
    },
  },
];

export function createUser(
  dispatch: AppDispatch,
  data: IContactsInfo,
  reset: UseFormReset<IContactsInfo>,
  navigate: NavigateFunction,
  path: string
) {
  console.log(data);
  dispatch(createContacts(data));
  reset();
  console.log(path);
  navigate(path);
}
