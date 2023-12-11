import { usePersonal } from '../../hooks/useContacts';
import { createEducation } from '../../store/educationSlice';
import { createUser } from '../../utils/create-user-services';
import { educationData } from '../../utils/education-services';
import { Arrows } from '../arrows';
import { Button } from '../button';
import { ButtonPositionStyled } from '../contacts/styled';
import { Steps } from '../steps';
import { EducationContentStyled, EducationStyled } from './styled';

export const Education = () => {
  const { register, dispatch, reset, handleSubmit, navigate } = usePersonal();
  const path = '/information';
  return (
    <>
      <form
        onSubmit={handleSubmit((data) =>
          createUser(dispatch, data, reset, navigate, path, createEducation)
        )}
      >
        <EducationStyled>
          <>
            <Arrows path='/information' />
            <Steps />
          </>
          <h4
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '40px',
            }}
          >
            Education Information
          </h4>
          <EducationContentStyled>
            {educationData.map(({ component, ...props }) =>
              component({ register, ...props })
            )}
          </EducationContentStyled>
        </EducationStyled>
        <ButtonPositionStyled>
          <Button type='submit' />
        </ButtonPositionStyled>
      </form>
    </>
  );
};
