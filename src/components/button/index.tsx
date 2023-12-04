import { useContacts } from '../../hooks/contacts-hook';
import { navigateTo } from '../../utils/main-services';
import { ButtonArrowStyled, ButtonStyled } from './styled';

interface Props extends Partial<HTMLButtonElement> {
  path: string;
}

export const Button = ({ type, path }: Props) => {
  const { navigate } = useContacts();

  return (
    <div>
      <ButtonStyled type={type} onClick={() => navigateTo(navigate, path)}>
        Next Step
        <ButtonArrowStyled />
      </ButtonStyled>
    </div>
  );
};
