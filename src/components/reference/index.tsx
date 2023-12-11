import { UseFormRegister } from 'react-hook-form';
import {
  ReferenceContentStyled,
  ReferenceStyled,
  ReferenceTopStyled,
  ReferenceBottomStyled,
  ReferenceTextAreaStyled,
} from './styled';
import { referenceData } from '../../utils/reference-services';

export const Reference = ({
  register,
}: {
  register: UseFormRegister<Record<string, string>>;
}) => {
  return (
    <ReferenceStyled>
      <ReferenceContentStyled>
        <ReferenceTopStyled>
          {referenceData.map(({ component, ...props }) =>
            component({ register, ...props })
          )}
        </ReferenceTopStyled>

        <ReferenceBottomStyled>
          <div>Description</div>
          <ReferenceTextAreaStyled
            placeholder='Add a few notes about your reference. Where you worked, how do you know this reference etc. '
            {...register('description')}
          />
        </ReferenceBottomStyled>
      </ReferenceContentStyled>
    </ReferenceStyled>
  );
};
