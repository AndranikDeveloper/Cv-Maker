import {
  SelectContentStyled,
  SelectOptionStyled,
  SelectStyled,
  SelectTagStyled,
} from "./styled";
import { IWorkComponentsProps } from "../../types/work-experience-types";
import { currentMonth } from "../../utils/select-services";

export const Select = ({
  title,
  styles,
  register,
  name,
}: IWorkComponentsProps) => {
  return (
    <SelectContentStyled>
      <div>{title}</div>
      <SelectStyled>
        <SelectTagStyled style={styles} {...register(name)}>
          {currentMonth.map((month) => (
            <SelectOptionStyled key={month}>{month}</SelectOptionStyled>
          ))}
        </SelectTagStyled>
        
      </SelectStyled>
    </SelectContentStyled>
  );
};
