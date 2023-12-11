import { ButtonWrapperStyled } from '../contacts/styled';
import {
  CurrentStepStyled,
  StepsCircleStyled,
  StepsContainerStyled,
  StepsContentStyled,
  StepsTextStyled,
} from './styled';
import { usePersonal } from '../../hooks/useContacts';
import { steps } from '../../utils/steps-services';
import { setPath } from '../../store/navigatePathSlice';

export const Steps = () => {
  const { dispatch, navigatePath, navigate } = usePersonal();
  const currentStep = steps.find((item) => item.path === navigatePath);

  function nav(path: string) {
    dispatch(setPath(path));
    navigate(path);
  }

  return (
    <StepsContainerStyled>
      <StepsContentStyled>
        {steps.map(({ title, path: currentPath }, idx) => (
          <CurrentStepStyled key={idx}>
            <ButtonWrapperStyled>
              <StepsCircleStyled
                $isCurrent={currentStep?.count === idx}
                onClick={() => nav(currentPath)}
              />
            </ButtonWrapperStyled>
            <StepsTextStyled>{title}</StepsTextStyled>
          </CurrentStepStyled>
        ))}
      </StepsContentStyled>
    </StepsContainerStyled>
  );
};
