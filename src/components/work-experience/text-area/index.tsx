import { IWorkComponentsProps } from '../../../types/work-experience-types';
import { TextAreaStyled } from '../styled';

export const TextArea = ({
  name,
  styles,
  placeholder,
  workRegister,
}: IWorkComponentsProps) => {
  return (
    <>
      <TextAreaStyled
        placeholder={placeholder}
        {...workRegister(name)}
        style={styles}
      />
    </>
  );
};
