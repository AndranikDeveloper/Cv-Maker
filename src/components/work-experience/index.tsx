import { useWork } from "../../hooks/useWork";
import {
  handleSubmitWork,
  workData,
} from "../../utils/work-experience-services";
import { Button } from "../button";
import { ButtonPositionStyled } from "../contacts/styled";
import { WorkContainerStyled, WorkContentStyled, WorkStyled } from "./styled";

export const WorkExperience = () => {
  const { workRegister, submitWorkInfo } = useWork();
  return (
    <WorkStyled>
      <form onSubmit={submitWorkInfo((data) => handleSubmitWork(data))}>
        <WorkContainerStyled>
          <WorkContentStyled>
            {workData.map(({ component, ...props }, idx) => (
              <span key={idx}>{component({ workRegister, ...props })}</span>
            ))}
          </WorkContentStyled>
        </WorkContainerStyled>
        <ButtonPositionStyled>
          <Button type="submit" />
        </ButtonPositionStyled>
      </form>
    </WorkStyled>
  );
};
