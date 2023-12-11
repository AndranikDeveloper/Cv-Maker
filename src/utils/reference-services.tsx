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
    name: 'referenceEmail',
    component: (props: ReferenceProps) => <ReferenceInput {...props} />,
  },

];
