import { useForm } from "react-hook-form";
// import { IUserWorks } from "../types/work-experience-types";
import { useAppDispatch } from "./store-hooks";

export const useWork = () => {
  const {
    register,
    handleSubmit: submitWorkInfo,
    reset: resetWorkInfo,
    setValue,
  } = useForm<Record<string, string>>();

  const dispatch = useAppDispatch();
  return { register, submitWorkInfo, dispatch, resetWorkInfo, setValue };
};
