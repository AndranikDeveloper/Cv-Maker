import { IInput } from "../../types/input-types";
import { InputStyled, InputTopStyled, TopRequiredStyled, TopTextStyled } from "./styled";

export const Input = ({ placeholder, required, title, name,  register }: IInput) => {
  return (
    <div>
      <InputTopStyled>
        <TopTextStyled>{title}</TopTextStyled>
        {
          required && <TopRequiredStyled>*</TopRequiredStyled>
        }
      </InputTopStyled>
      <InputStyled {...register(name, {required: required})} name={name} placeholder={placeholder} required={required} />
    </div>
  );
};
