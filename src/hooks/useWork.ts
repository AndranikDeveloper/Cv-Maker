import { useForm } from "react-hook-form";
import { IUserWorks } from "../types/work-experience-types";

export const useWork = () => {
  const {
    register: workRegister,
    handleSubmit: submitWorkInfo,
    control,
  } = useForm<IUserWorks>();
  return { workRegister, submitWorkInfo, control };
};
