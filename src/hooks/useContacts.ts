import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store-hooks";
import { useNavigate } from "react-router-dom";

export const usePersonal = () => {
  const [img, setImg] = useState<string>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigatePath = useAppSelector((state) => state.navigatePathSlice.path);
  const step = useAppSelector((state) => state.stepsSlice.step);
  const user = useAppSelector(state => state.userSlice.user)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    setValue
  } = useForm<Record<string, string>>();

  return {
    register,
    handleSubmit,
    reset,
    img,
    setImg,
    dispatch,
    navigate,
    errors,
    control,
    navigatePath,
    step,
    user,
    setValue
  };
};
