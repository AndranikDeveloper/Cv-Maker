import { usePersonal } from '../../hooks/useContacts';
import { navigateTo } from '../../utils/main-services';
import {
  ButtonStyled,
  MainButtonsStyled,
  MainContainerStyled,
  MainStyled,
} from './styled';

export const Main = () => {
  const { navigate, dispatch } = usePersonal();
  return (
    <MainStyled>
      <MainContainerStyled>
        <MainButtonsStyled>
          <ButtonStyled
            onClick={() => navigateTo(navigate, '/contacts', dispatch)}
          >
            Create New CV
          </ButtonStyled>
          <ButtonStyled onClick={() => navigateTo(navigate, '/templates')}>
            View Templates
          </ButtonStyled>
          <ButtonStyled onClick={() => navigateTo(navigate, '/works')}>
            How It Works
          </ButtonStyled>
        </MainButtonsStyled>
      </MainContainerStyled>
    </MainStyled>
  );
};
