import { IInput } from '../../types/input-types';
import { validateEmail } from '../../utils/contacts-services';
import {
  InputStyled,
  InputTopStyled,
  TopRequiredStyled,
  TopTextStyled,
} from './styled';

export const Input = ({
  name,
  placeholder,
  register,
  required,
  type,
  title,
  styles,
}: IInput) => {
  const value = validateEmail(name);

  return (
    <div style={styles}>
      <InputTopStyled>
        <TopTextStyled>{title}</TopTextStyled>
        {required && <TopRequiredStyled>*</TopRequiredStyled>}
      </InputTopStyled>
      <InputStyled
        style={styles}
        {...register!(name, { ...value })}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
};
