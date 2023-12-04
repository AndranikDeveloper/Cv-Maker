import { useAppSelector } from "../../hooks/storeHooks";
import { stepsData } from "../../utils/steps-services";
import { CurrentStepStyled, StepsCircleStyled, StepsContainerStyled, StepsContentStyled, StepsTextStyled } from "./styled";

export const Steps = () => {
  const stepNumber = useAppSelector((state) => state.stepsSlice.stepNumber);
  console.log(stepNumber);
  
  return (
    <StepsContainerStyled>
      <StepsContentStyled>
        {stepsData.map((step, idx) => (
          <CurrentStepStyled key={idx}>
            <StepsCircleStyled $isCurrent={stepNumber === idx} />
            <StepsTextStyled>{step}</StepsTextStyled>
          </CurrentStepStyled>
        ))}
      </StepsContentStyled>
    </StepsContainerStyled>
  );
};
