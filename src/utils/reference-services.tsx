import { ReferenceInput } from '../components/reference/reference-input/index';
import { ReferenceData, ReferenceProps } from '../types/reference-types';

export const referenceData: ReferenceData[] = [
  {
    title: 'Company Name',
    name: 'company',
    component: (props: ReferenceProps) => <ReferenceInput {...props} />,
  },
  {
    title: 'Contact Person',
    name: 'contact',
    component: (props: ReferenceProps) => <ReferenceInput {...props} />,
  },
  {
    title: 'Phone Number',
    name: 'phone',
    component: (props: ReferenceProps) => <ReferenceInput {...props} />,
  },
  {
    title: 'Email Address',
    name: 'email',
    component: (props: ReferenceProps) => <ReferenceInput {...props} />,
  },
  // {
  //   title: 'Description',
  //   placeholder:
  //     'Add a few notes about your reference. Where you worked, how do you know this reference etc. ',
  //   name: 'description',
  //   component: (props: ReferenceProps) => <TextArea {...props} />,
  //   styles: {
  //     borderRadius: '10px',
  //     background: '#C4C4C4',
  //     height: '73.084px',
  //     resize: 'none',
  //   },
  // },
];
