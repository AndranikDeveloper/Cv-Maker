import { useState } from 'react';
import { useContacts } from '../../hooks/contacts-hook';
import { createUser } from '../../utils/contacts-services';
import { ButtonWrapperStyled } from '../contacts/styled';
import {
  CurrentStepStyled,
  StepsCircleStyled,
  StepsContainerStyled,
  StepsContentStyled,
  StepsTextStyled,
} from './styled';
import { useAppSelector } from '../../hooks/store-hooks';
import { Contacts } from '../contacts';
import { WorkExperience } from '../work-experiance';
import { Education } from '../education';
import { Information } from '../other-information';
import { SaveCv } from '../../final-cv';

export const Steps = () => {
  const [path, setPath] = useState('');
  const step = useAppSelector((state) => state.stepsSlice.step);
  const { handleSubmit, dispatch, reset, navigate } = useContacts();

  const steps = [
    {
      title: `Contact Information`,
      component: <Contacts />,
      count: 0,
      path: '/contacts',
    },
    {
      title: `Work Experience`,
      component: <WorkExperience />,
      count: 1,
      path: '/work-experience',
    },
    {
      title: `Education Details`,
      component: <Education />,
      count: 2,
      path: '/contacts',
    },
    {
      title: `Other Information`,
      component: <Information />,
      count: 3,
      path: '/information',
    },
    {
      title: `Save / Download`,
      component: <SaveCv />,
      count: 4,
      path: '/work-experience',
    },
  ];

  return (
    <StepsContainerStyled>
      <StepsContentStyled>
        {steps.map(({ title, count, path: currentPath }, idx) => (
          <CurrentStepStyled key={idx}>
            <ButtonWrapperStyled
              onSubmit={handleSubmit((data) =>
                createUser(dispatch, data, reset, navigate, path)
              )}
            >
              <StepsCircleStyled
                $isCurrent={count === step}
                onClick={() => setPath(currentPath)}
              />
            </ButtonWrapperStyled>
            <StepsTextStyled>{title}</StepsTextStyled>
          </CurrentStepStyled>
        ))}
      </StepsContentStyled>
    </StepsContainerStyled>
  );
};
