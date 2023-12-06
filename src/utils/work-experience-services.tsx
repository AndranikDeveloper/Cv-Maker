import {
  IUserWorks,
  IWorkComponentsProps,
  IWorkData,
} from "../types/work-experience-types";
import { Select } from "../components/select";
import { WorkInput } from "../components/work-inputs";
import { SelectYear } from "../components/select/select-year";

export const workData: IWorkData[] = [
  {
    name: "employer",
    title: "Employer",
    component: (props: IWorkComponentsProps) => <WorkInput {...props} />,
    placeholder: "PwC",
    styles: {
      
    },
  },
  {
    name: "startDate",
    title: "Start Date",
    component: (props: IWorkComponentsProps) => <Select {...props} />,
    styles: {
      borderRadius: "4px",
      border: "2px solid var(--border-subtle, #AAA)",
      background: "#C7C7C7",
      display: "inline-flex",
      height: "45px",
      padding: "14px 12px 13px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "6px",
      flexShrink: 0,
    },
  },
  {
    name: 'startYear',
    title: 'Start Year',
    component: (props: IWorkComponentsProps) => <SelectYear {...props}/>,
    styles: {
      borderRadius: "4px",
      border: "2px solid var(--border-subtle, #AAA)",
      background: "#C7C7C7",
      display: "inline-flex",
      height: "45px",
      padding: "14px 12px 13px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "6px",
      flexShrink: 0,
    },
  },
  {
    name: "endDate",
    title: "End Date",
    component: (props: IWorkComponentsProps) => <Select {...props} />,
    styles: {
      borderRadius: "4px",
      border: "2px solid var(--border-subtle, #AAA)",
      background: "#C7C7C7",
      display: "inline-flex",
      height: "45px",
      padding: "14px 12px 13px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "6px",
      flexShrink: 0,
    },
  },
  {
    name: 'endYear',
    title: 'End Year',
    component: (props: IWorkComponentsProps) => <SelectYear {...props}/>,
    styles: {
      borderRadius: "4px",
      border: "2px solid var(--border-subtle, #AAA)",
      background: "#C7C7C7",
      display: "inline-flex",
      height: "45px",
      padding: "14px 12px 13px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "6px",
      flexShrink: 0,
    },
  },
  {
    name: "jobTitle",
    title: "Job Title",
    component: (props: IWorkComponentsProps) => <WorkInput {...props} />,
    placeholder: "Sales Manager",
    styles: {},
  },
  {
    name: "location",
    title: "Location",
    component: (props: IWorkComponentsProps) => <WorkInput {...props} />,
    placeholder: "Jacksonville, FL",
    styles: {},
  },
  {
    name: "description",
    title: "Description",
    component: (props: IWorkComponentsProps) => <WorkInput {...props} />,
    placeholder:
      "Describe your tasks, responsibilities and any competencies related to this work experience",
    styles: {},
  },
];

export function handleSubmitWork(data: IUserWorks) {
  console.log(data)
}
