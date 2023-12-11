import { UseFormReset } from "react-hook-form";
import { AppDispatch } from "../store/store";
import { NavigateFunction } from "react-router-dom";

export function createUser(
  dispatch: AppDispatch,
  data: Record<string, string>,
  reset: UseFormReset<Record<string, string>>,
  navigate: NavigateFunction,
  path: string,
  store?: (val: Record<string, string>) => void
) {
  console.log(data)
  dispatch(store!(data)!);
  reset();
  if (data) {
    navigate(path);
  }
}
