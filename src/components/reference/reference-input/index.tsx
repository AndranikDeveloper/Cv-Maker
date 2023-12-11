import { ReferenceProps } from '../../../types/reference-types';
import { InputStyled, InputTextStyled, ReferenceInputStyled } from '../styled';

export const ReferenceInput = ({ register, title, name }: ReferenceProps) => {
  return (
    <>
      <InputStyled>
        <InputTextStyled>{title}</InputTextStyled>
        <ReferenceInputStyled {...register(name)} />
      </InputStyled>
    </>
  );
};
