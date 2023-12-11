import React from 'react';
import { usePersonal } from '../../hooks/useContacts';
import { createUserData } from '../../store/userSlice';
import { createUser } from '../../utils/create-user-services';
import { educationData } from '../../utils/education-services';
import { Arrows } from '../arrows';
import { Button } from '../button';
import { ButtonPositionStyled } from '../contacts/styled';
import { Steps } from '../steps';
import { EducationContentStyled, EducationStyled } from './styled';

export const Education = () => {
  const { register, dispatch, reset, handleSubmit, navigate, navigatePath } = usePersonal();
  const path = '/information';
  return (
    <>
      <form
        onSubmit={handleSubmit((data) =>
          createUser(dispatch, data, reset, navigate, navigatePath, createUserData)
        )}
      >
        <EducationStyled>
          <>
            <Arrows path={path} />
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
            {educationData.map(({ component, ...props }) => (
              <React.Fragment key={props.name}>
                {component({ register, ...props })}
              </React.Fragment>
            ))}
          </EducationContentStyled>
        </EducationStyled>
        <ButtonPositionStyled>
          <Button type='submit' />
        </ButtonPositionStyled>
      </form>
    </>
  );
};
