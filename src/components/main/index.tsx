import { navigateTo } from "../../utils/main-services";
import {
  ButtonStyled,
  MainButtonsStyled,
  MainContainerStyled,
  MainStyled,
} from "./styled";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();

  return (
    <MainStyled>
      <MainContainerStyled>
        <MainButtonsStyled>
          <ButtonStyled onClick={() => navigateTo(navigate, "/contacts")}>
            Create New CV
          </ButtonStyled>
          <ButtonStyled onClick={() => navigateTo(navigate, "/templates")}>
            View Templates
          </ButtonStyled>
          <ButtonStyled onClick={() => navigateTo(navigate, "/works")}>
            How It Works
          </ButtonStyled>
        </MainButtonsStyled>
      </MainContainerStyled>
    </MainStyled>
  );
};
