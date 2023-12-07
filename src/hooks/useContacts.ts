import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAppDispatch } from './store-hooks';
import { useNavigate } from 'react-router-dom';


export const usePersonal = () => {
  const [img, setImg] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
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
    getValues,
  };
};
