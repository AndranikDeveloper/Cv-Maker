import { UseFormReset } from 'react-hook-form';
import { AppDispatch } from '../store/store';
import { NavigateFunction } from 'react-router-dom';
import { setPath } from '../store/navigatePathSlice';

export function createUser(
  dispatch: AppDispatch,
  data: Record<string, string>,
  reset: UseFormReset<Record<string, string>>,
  navigate: NavigateFunction,
  path: string,
  store?: (val: Record<string, string>) => void
) {
  dispatch(store!(data)!);
  reset();
  if (data) {
    dispatch(setPath(path));
    navigate(path);
  }
}
