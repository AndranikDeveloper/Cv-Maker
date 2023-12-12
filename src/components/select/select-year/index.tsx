import { IWorkComponentsProps } from '../../../types/work-experience-types';
import { years } from '../../../utils/select-services';
import { SelectOptionStyled, SelectTagStyled } from '../styled';

export const SelectYear = ({
  register,
  name,
  styles,
  defaultValue,
}: IWorkComponentsProps) => {
  return (
    <div>
      <SelectTagStyled
        style={styles}
        {...register(name)}
        defaultValue={defaultValue}
      >
        {years.map((year) => (
          <SelectOptionStyled key={year}>{year.toString()}</SelectOptionStyled>
        ))}
      </SelectTagStyled>
    </div>
  );
};
