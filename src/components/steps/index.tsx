import { useContacts } from '../../hooks/contacts-hook';
import { useAppSelector } from '../../hooks/store-hooks';
import { createUser } from '../../utils/contacts-services';
import { stepsData } from '../../utils/steps-services';
import { ButtonWrapperStyled } from '../contacts/styled';
import {
  CurrentStepStyled,
  StepsCircleStyled,
  StepsContainerStyled,
  StepsContentStyled,
  StepsTextStyled,
} from './styled';

export const Steps = () => {
  const stepNumber = useAppSelector((state) => state.stepsSlice.stepNumber);
  const { handleSubmit, dispatch, reset } = useContacts();

  return (
    <StepsContainerStyled>
      <StepsContentStyled>
        {stepsData.map((step, idx) => (
          <CurrentStepStyled key={idx}>
            <ButtonWrapperStyled
              onSubmit={handleSubmit((data) =>
                createUser(dispatch, data, reset)
              )}
            >
              <StepsCircleStyled $isCurrent={stepNumber === idx} />
            </ButtonWrapperStyled>
            <StepsTextStyled>{step}</StepsTextStyled>
          </CurrentStepStyled>
        ))}
      </StepsContentStyled>
    </StepsContainerStyled>
  );
};
