import { useForm } from 'react-hook-form';
import { IUserWorks } from '../types/work-experience-types';
import { useAppDispatch } from './store-hooks';

export const useWork = () => {
  const {
    register: workRegister,
    handleSubmit: submitWorkInfo,
    reset: resetWorkInfo,
  } = useForm<IUserWorks>();
  const dispatch = useAppDispatch();
  return { workRegister, submitWorkInfo, dispatch, resetWorkInfo };
};
