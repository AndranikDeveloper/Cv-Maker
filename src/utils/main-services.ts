import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../store/store';
import { setPath } from '../store/navigatePathSlice';

export function navigateTo(
  navigate: NavigateFunction,
  path: string,
  dispatch?: AppDispatch
) {
  navigate(path);
  if (path === '/contacts' && dispatch) {
    dispatch(setPath(path));
  }
}
