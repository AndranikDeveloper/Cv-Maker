import { additionalInfo } from '../../utils/information-services';
import {
  InformationContainerStyled,
  InformationContentStyled,
  InformationStyled,
} from './styled';
import { Arrows } from '../arrows';
import { Steps } from '../steps';
import { usePersonal } from '../../hooks/useContacts';
import { createUser } from '../../utils/create-user-services';
import { createInformation } from '../../store/informationSlice';
import { ButtonPositionStyled } from '../contacts/styled';
import { Button } from '../button';

export const Information = () => {
  const { dispatch, handleSubmit, navigate, reset, register } = usePersonal();
  const path = '/save';

  return (
    <InformationStyled>
      <form
        onSubmit={handleSubmit((data) =>
          createUser(dispatch, data, reset, navigate, path, createInformation)
        )}
      >
        <InformationContainerStyled>
          <div>
            <Arrows path={path} />
            <Steps />
          </div>
          <InformationContentStyled>
            {additionalInfo.map(({ component, ...props }) =>
              component({ register, ...props })
            )}
            <ButtonPositionStyled>
              <Button type='submit' />
            </ButtonPositionStyled>
          </InformationContentStyled>
        </InformationContainerStyled>
      </form>
    </InformationStyled>
  );
};
