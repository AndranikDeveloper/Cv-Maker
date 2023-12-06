import { IWorkComponentsProps } from '../../../types/work-experience-types';
import { years } from '../../../utils/select-services';
import { SelectOptionStyled, SelectTagStyled } from '../styled';

export const SelectYear = ({
  workRegister,
  name,
  styles,
}: IWorkComponentsProps) => {
  return (
    <div>
      <SelectTagStyled style={styles} {...workRegister(name)}>
        {years.map((year) => (
          <SelectOptionStyled key={year}>{year.toString()}</SelectOptionStyled>
        ))}
      </SelectTagStyled>
    </div>
  );
};
