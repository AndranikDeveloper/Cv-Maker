import { useForm } from 'react-hook-form';
import { IContactsInfo } from '../types/input-types';
import { useState } from 'react';
import { useAppDispatch } from './store-hooks';
import { useNavigate } from 'react-router-dom';

export const useContacts = () => {
  const [img, setImg] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<IContactsInfo>();

  return { register, handleSubmit, reset, img, setImg, dispatch, navigate };
};
