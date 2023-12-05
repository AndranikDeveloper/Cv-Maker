import { ButtonArrowStyled, ButtonStyled } from './styled';

interface Props extends Partial<HTMLButtonElement> {
}

export const Button = ({ type }: Props) => {

  return (
    <div style={{marginTop: "10px"}}>
      <ButtonStyled type={type}>
        Next Step
        <ButtonArrowStyled />
      </ButtonStyled>
    </div>
  );
};
