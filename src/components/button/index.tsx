import { ButtonArrowStyled, ButtonStyled } from "./styled";

interface Props extends Partial<HTMLButtonElement>  {}

export const Button = ({type}: Props) => {
  return (
    <div>
      <ButtonStyled type={type}>
        Next Step
        <ButtonArrowStyled />
      </ButtonStyled>
    </div>
  );
};
