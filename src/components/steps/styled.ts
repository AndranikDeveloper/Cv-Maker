import { styled } from "styled-components";
import { IStepsStyledProps } from "../../types/steps-types";

export const StepsContainerStyled = styled.div`
  margin-top: 30px;
`;
export const CurrentStepStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 6px;
`;
export const StepsCircleStyled = styled.div<IStepsStyledProps>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ $isCurrent }) => ($isCurrent ? "black" : "gray")}; 
  cursor: pointer;
`;

export const StepsTextStyled = styled.div`
  color: #000;
  text-align: center;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; 
  letter-spacing: -0.09px;
`;
export const StepsContentStyled = styled.div`
  display: flex;
  column-gap: 13px;
`;
