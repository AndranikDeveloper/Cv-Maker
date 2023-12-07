import { IWorkComponentsProps } from '../../../types/work-experience-types';
import { TextAreaStyled } from '../styled';

export const TextArea = ({
  name,
  styles,
  placeholder,
  register,
}: IWorkComponentsProps) => {
  return (
    <>
      <TextAreaStyled
        placeholder={placeholder}
        {...register!(name)}
        style={styles}
      />
    </>
  );
};
