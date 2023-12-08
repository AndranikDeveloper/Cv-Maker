import {
  IInformationData,
  IInformationProps,
} from '../types/information-types';
import { Accordion } from '../components/accordion/index';
import { TextArea } from '../components/work-experience/text-area';

export const additionalInfo: IInformationData[] = [
  {
    sectionName: '',
    name: 'aboutMe',
    title: 'About Me',
    placeholder:
      'I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I have more than 2 years of experience in managing and leading... ',
    styles: {
      borderRadius: '10px',
      background: '#C4C4C4',
      width: '313px',
      height: '94px',
    },
    component: (props: IInformationProps) => <TextArea {...props} />,
  },
  {
    placeholder: '',
    title: '',
    name: 'languages',
    sectionName: 'Languages',
    component: (props: IInformationProps) => <Accordion {...props} />,
    styles: {
      width: '313px',
      height: '45px',
      borderRadius: '10px',
      background: '#C4C4C4',
    },
  },
  {
    placeholder: '',
    title: '',
    name: 'reference',
    sectionName: 'Reference',
    component: (props: IInformationProps) => <Accordion {...props} />,
    styles: {
      width: '313px',
      height: '45px',
      borderRadius: '10px',
      background: '#C4C4C4',
    },
  },
];
