import {
  IWorkComponentsProps,
  IWorkData,
} from "../types/work-experience-types";
import { Select } from "../components/select";

import { TextArea } from "../components/work-experience/text-area";
import { Input } from "../components/contacts-input";
import { SelectYear } from "../components/select/select-year";

export const workData: IWorkData[] = [
  {
    name: "employer",
    title: "Employer",
    component: (props: IWorkComponentsProps) => <Input {...props} />,
    placeholder: "PwC",
    styles: {
      gridArea: "1 / 1 / 2 / 5",
      width: "323px",
    },
    required: false,
    type: "text",
  },
  {
    name: "startDate",
    title: "Start Date",
    component: (props: IWorkComponentsProps) => <Select {...props} />,
    styles: {
      borderRadius: "4px",
      background: "#C7C7C7",
      height: "45px",
      gridArea: "2 / 1 / 3 / 2",
    },
    required: false,
    placeholder: ""
  },
  {
    name: "startYear",
    title: "Start Year",
    component: (props: IWorkComponentsProps) => <SelectYear {...props} />,
    styles: {
      borderRadius: "4px",
      border: "2px solid  #AAA",
      background: "#C7C7C7",
      height: "45px",
      marginLeft: "10px",
    },
    required: false,
    placeholder: ""
  },
  {
    name: "endDate",
    title: "End Date",
    component: (props: IWorkComponentsProps) => <Select {...props} />,
    styles: {
      borderRadius: "4px",
      background: "#C7C7C7",
      height: "45px",
      gridArea: "2 / 3 / 3 / 4",
    },
    required: false,
    placeholder: ""
  },
  {
    name: "endYear",
    title: "End Year",
    component: (prpos: IWorkComponentsProps) => <SelectYear {...prpos} />,
    styles: {
      borderRadius: "4px",
      border: "2px solid  #AAA",
      background: "#C7C7C7",
      height: "45px",
      marginLeft: "10px",
    },
    required: false,
    placeholder: ""
  },
  {
    name: "jobTitle",
    title: "Job Title",
    component: (props: IWorkComponentsProps) => <Input {...props} />,
    placeholder: "Sales Manager",
    styles: {
      gridArea: "3 / 1 / 4 / 5",
      width: "323px",
    },
    required: false,
    type: "text",
  },
  {
    name: "location",
    title: "Location",
    component: (props: IWorkComponentsProps) => <Input {...props} />,
    placeholder: "Jacksonville, FL",
    styles: {
      gridArea: "4 / 1 / 5 / 5",
      width: "323px",
    },
    required: false,
    type: "text",
  },
  {
    name: "description",
    title: "Description",
    component: (props: IWorkComponentsProps) => <TextArea {...props} />,
    placeholder:
      "Describe your tasks, responsibilities and any competencies related to this work experience",
    styles: {
      gridArea: "5 / 1 / 7 / 5",
      width: "323px",
      borderRadius: "10px",
      background: "#C4C4C4",
      height: "80px",
      alignItems: "center",
      padding: "10px",
      resize: "none",
    },
    required: false,
  },
];
