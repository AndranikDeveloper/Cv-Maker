import { Input } from "../components/contacts-input";
import { EducationSelect } from "../components/education/education-select";
import { Select } from "../components/select";
import { SelectYear } from "../components/select/select-year";
import { TextArea } from "../components/work-experience/text-area";
import { IEducationData, IEducationProps } from "../types/education-types";

export const educationData: IEducationData[] = [
  {
    title: "school",
    name: "school",
    placeholder: "New York University",
    component: (props: IEducationProps) => <Input {...props} />,
    required: false,
    styles: {
      width: "100%",
        gridArea: "1 / 1 / 2 / 5",
      },
  },
  {
    name: "startEducationDate",
    title: "Start Date",
    component: (props: IEducationProps) => <Select {...props} />,
    styles: {
      borderRadius: "4px",
      background: "#C7C7C7",
      height: "45px",
      width: "100%",
      gridArea: "2 / 1 / 3 / 2",
    },
    required: false,
    placeholder: "",
  },
  {
    name: "startEducationYear",
    title: "Start Year",
    component: (props: IEducationProps) => <SelectYear {...props} />,
    styles: {
      borderRadius: "4px",
      border: "2px solid  #AAA",
      background: "#C7C7C7",
      height: "45px",
      width: "100%",
      gridArea: "2 / 2 / 3 / 3",
      marginLeft: '7px'
    },
    required: false,
    placeholder: "",
  },
  {
    name: "endEducationDate",
    title: "End Date",
    component: (props: IEducationProps) => <Select {...props} />,
    styles: {
      borderRadius: "4px",
      background: "#C7C7C7",
      height: "45px",
      gridArea: "2 / 3 / 3 / 4",
      width: "100%",
    },
    required: false,
    placeholder: "",
  },
  {
    name: "endEducationYear",
    title: "End Year",
    component: (prpos: IEducationProps) => <SelectYear {...prpos} />,
    styles: {
      borderRadius: "4px",
      border: "2px solid  #AAA",
      background: "#C7C7C7",
      height: "45px",
      width: '75px',
      gridArea: "2 / 4 / 3 / 5",
    },
    required: false,
    placeholder: "",
  },
  {
    name: "subject",
    title: "Subject",
    placeholder: "Economics",
    required: false,
    component: (props: IEducationProps) => <Input {...props} />,
    styles: {
      borderRadius: "10px",
      width: "100%",
      gridArea: "3 / 1 / 4 / 3",
    },
    type: "text",
  },
  {
    name: "degree",
    title: "Degree",
    required: false,
    component: (props: IEducationProps) => <EducationSelect {...props} />,
    styles: {
      borderRadius: "4px",
      border: "2px solid #AAA",
      background: "#C7C7C7",
      height: "45px",
      width: "100%",
      gridArea: "3 / 3 / 4 / 5",
      marginLeft: '20px'
    },
    placeholder: "",
  },
  {
    name: "description",
    title: "Description",
    component: (props: IEducationProps) => <TextArea {...props} />,
    placeholder:
      "Add a description for your course to explain exactly what it entailed to potential employers.",
    styles: {
      borderRadius: "10px",
      background: "#C4C4C4",
      height: "80px",
      alignItems: "center",
      padding: "10px",
      resize: "none",
      gridArea: "4 / 1 / 5 / 5",
    },
    required: false,
  },
];

export const degrees = [
  "Bachelor of Arts (BA)",
  "Bachelor of Science (BS)",
  "Master of Arts (MA)",
  "Master of Science (MS)",
  "Doctor of Philosophy (PhD)",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Engineering (BEng)",
  "Master of Business Administration (MBA)",
  "Doctor of Medicine (MD)",
  "Bachelor of Computer Science (BCS)",
];
