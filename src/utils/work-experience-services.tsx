import {
  IUserWorks,
  IWorkComponentsProps,
  IWorkData,
} from '../types/work-experience-types';
import { Select } from '../components/select';
import { WorkInput } from '../components/work-inputs';
import { SelectYear } from '../components/select/select-year';
import { AppDispatch } from '../store/store';
import { UseFormReset } from 'react-hook-form';
import { createWorkExperience } from '../store/workExperienceSlice';
import { TextArea } from '../components/work-experience/text-area';

export const workData: IWorkData[] = [
  {
    name: 'employer',
    title: 'Employer',
    component: (props: IWorkComponentsProps) => <WorkInput {...props} />,
    placeholder: 'PwC',
    styles: {
      gridArea: '1 / 1 / 2 / 5',
      width: '323px',
    },
  },
  {
    name: 'startDate',
    title: 'Start Date',
    component: (props: IWorkComponentsProps) => <Select {...props} />,
    styles: {
      borderRadius: '4px',
      background: '#C7C7C7',
      height: '45px',
      gridArea: '2 / 1 / 3 / 2',
    },
  },
  {
    name: 'startYear',
    title: 'Start Year',
    component: (props: IWorkComponentsProps) => <SelectYear {...props} />,
    styles: {
      borderRadius: '4px',
      background: '#C7C7C7',
      height: '45px',
      gridArea: '2 / 2 / 3 / 3',
      marginLeft: '10px',
    },
  },
  {
    name: 'endDate',
    title: 'End Date',
    component: (props: IWorkComponentsProps) => <Select {...props} />,
    styles: {
      borderRadius: '4px',
      background: '#C7C7C7',
      height: '45px',
      gridArea: '2 / 3 / 3 / 4',
    },
  },
  {
    name: 'endYear',
    title: 'End Year',
    component: (props: IWorkComponentsProps) => <SelectYear {...props} />,
    styles: {
      borderRadius: '4px',
      background: '#C7C7C7',
      height: '45px',
      gridArea: '2 / 4 / 3 / 5',
      marginLeft: '10px',
    },
  },
  {
    name: 'jobTitle',
    title: 'Job Title',
    component: (props: IWorkComponentsProps) => <WorkInput {...props} />,
    placeholder: 'Sales Manager',
    styles: {
      gridArea: '3 / 1 / 4 / 5',
      width: '323px',
    },
  },
  {
    name: 'location',
    title: 'Location',
    component: (props: IWorkComponentsProps) => <WorkInput {...props} />,
    placeholder: 'Jacksonville, FL',
    styles: {
      gridArea: '4 / 1 / 5 / 5',
      width: '323px',
    },
  },
  {
    name: 'description',
    title: 'Description',
    component: (props: IWorkComponentsProps) => <TextArea {...props} />,
    placeholder:
      'Describe your tasks, responsibilities and any competencies related to this work experience',
    styles: {
      gridArea: '5 / 1 / 7 / 5',
      width: '323px',
      borderRadius: '10px',
      background: '#C4C4C4',
      height: '80px',
      alignItems: 'center',
      padding: '10px',
      resize: 'none',
    },
  },
];

export function handleSubmitWork(
  data: IUserWorks,
  dispatch: AppDispatch,
  reset: UseFormReset<IUserWorks>
) {
  console.log(data);
  dispatch(createWorkExperience(data));
  reset();
}
