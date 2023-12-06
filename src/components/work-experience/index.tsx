import { useWork } from '../../hooks/useWork';
import {
  handleSubmitWork,
  workData,
} from '../../utils/work-experience-services';
import { Arrows } from '../arrows';
import { Button } from '../button';
import { ButtonPositionStyled } from '../contacts/styled';
import { Steps } from '../steps';
import { WorkContainerStyled, WorkContentStyled, WorkStyled } from './styled';

export const WorkExperience = () => {
  const { workRegister, submitWorkInfo, dispatch, resetWorkInfo } = useWork();
  return (
    <WorkStyled>
      <form
        onSubmit={submitWorkInfo((data) =>
          handleSubmitWork(data, dispatch, resetWorkInfo)
        )}
      >
        <WorkContainerStyled>
          <>
            <Arrows path='/education' />
            <Steps />
          </>
          <>
            <h3
              style={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Work Experience
            </h3>
            <WorkContentStyled>
              {workData.map(({ component, ...props }) =>
                component({ workRegister, ...props })
              )}
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
