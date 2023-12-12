import {
  IInformationData,
  IInformationProps,
} from "../types/information-types";
import { Accordion } from "../components/accordion/index";
import { TextArea } from "../components/work-experience/text-area";
import { IWorkComponentsProps } from "../types/work-experience-types";

export const additionalInfo: IInformationData[] = [
  {
    name: "descriptionWork",
    title: "About Me",
    placeholder:
      "I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I have more than 2 years of experience in managing and leading... ",
    styles: {
      borderRadius: "10px",
      background: "#C4C4C4",
      width: '100%',
      height: "94px",
      padding: '5px',
      resize: 'none'
    },
    sectionName: '',
    component: (props: IWorkComponentsProps) => <TextArea {...props} />,
  },
  {
    name: "languages",
    sectionName: "Languages",
    component: (props: IInformationProps) => <Accordion {...props} />,
    styles: {
      width: "313px",
      height: "45px",
      borderRadius: "10px",
      background: "#C4C4C4",
    },
    title: '',
    placeholder: ''
  },
];
