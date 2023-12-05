import { useForm } from 'react-hook-form';
import { IContactsInfo } from '../types/input-types';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './store-hooks';
import { useNavigate } from 'react-router-dom';

export const useContacts = () => {
  const [img, setImg] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const stepCount = useAppSelector((state) => state.stepsSlice.stepNumber);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<IContactsInfo>();

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
    stepCount,
  };
};
