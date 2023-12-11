import { usePersonal } from '../../hooks/useContacts';
import { createUser } from '../../utils/create-user-services';
import { workData } from '../../utils/work-experience-services';
import { Arrows } from '../arrows';
import { Button } from '../button';
import { ButtonPositionStyled } from '../contacts/styled';
import { Steps } from '../steps';
import {
  WorkContainerStyled,
  WorkContentStyled,
  WorkStyled,
  WorkTitleStyled,
} from './styled';
import { createUserData } from '../../store/userSlice';
import React from 'react';

export const WorkExperience = () => {
  const { register, handleSubmit, dispatch, reset, navigate } = usePersonal();
  const path = '/education';
  return (
    <WorkStyled>
      <form
        onSubmit={handleSubmit((data) =>
          createUser(dispatch, data, reset, navigate, path, createUserData)
        )}
      >
        <WorkContainerStyled>
          <>
            <Arrows path={path} />
            <Steps />
          </>
          <>
            <WorkTitleStyled>Work Experience</WorkTitleStyled>
            <WorkContentStyled>
              {workData.map(({ component, ...props }) => (
                <React.Fragment key={props.name}>
                  {component({ register, ...props })}
                </React.Fragment>
              ))}
            </WorkContentStyled>
          </>
        </WorkContainerStyled>
        <ButtonPositionStyled>
          <Button type='submit' />
        </ButtonPositionStyled>
      </form>
    </WorkStyled>
  );
};
