import { IWorkComponentsProps } from '../../../types/work-experience-types';
import { years } from '../../../utils/select-services';
import { SelectOptionStyled, SelectTagStyled } from '../styled';

export const SelectYear = ({
  register,
  name,
  styles,
}: IWorkComponentsProps) => {
  return (
    <div>
      <SelectTagStyled style={styles} {...register(name)}>
        {years.map((year) => (
          <SelectOptionStyled key={year}>{year.toString()}</SelectOptionStyled>
        ))}
      </SelectTagStyled>
    </div>
  );
};
