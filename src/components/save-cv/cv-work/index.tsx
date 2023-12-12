import { usePersonal } from '../../../hooks/useContacts';
import { useUserData } from '../../../hooks/useUser';
import { UnderLineStyled } from '../cv-contacts/styled';
import {
  CvWorkStyled,
  EmployerContentStyled,
  TitleStyled,
  LeftContentStyled,
  LeftItemStyled,
  LeftTitleStyled,
  WorkItemStyled,
  WorkLeftSideStyled,
  WorkRightSideStyled,
  WorkContentStyled,
} from './styled';

export const CvWork = () => {
  const { user } = usePersonal();
  const { jobDescription, started, ended, defaultDate, defaultYearDate } =
    useUserData(user);

  return (
    <CvWorkStyled>
      <WorkLeftSideStyled>
        {(jobDescription!.jobTitle || jobDescription!.employer) && (
          <LeftTitleStyled>Experience at Work</LeftTitleStyled>
        )}

        <LeftContentStyled>
          {jobDescription!.employer && jobDescription!.employer !== '' && (
            <LeftItemStyled>
              <TitleStyled>Employer: </TitleStyled>
              <EmployerContentStyled>
                {jobDescription!.employer}
              </EmployerContentStyled>
            </LeftItemStyled>
          )}
          {jobDescription!.jobTitle && jobDescription!.jobTitle !== '' && (
            <LeftItemStyled>
              <TitleStyled>Job Title: </TitleStyled>
              <EmployerContentStyled>
                {jobDescription!.jobTitle}
              </EmployerContentStyled>
            </LeftItemStyled>
          )}
          {(jobDescription!.jobTitle || jobDescription!.employer) &&
            (jobDescription!.jobTitle !== '' ||
              jobDescription!.employer !== '') && <UnderLineStyled />}
        </LeftContentStyled>
      </WorkLeftSideStyled>
      <WorkRightSideStyled>
        {started && !defaultDate && (
          <WorkItemStyled>
            <TitleStyled>Job Starts: </TitleStyled>
            <WorkContentStyled>{started}</WorkContentStyled>
          </WorkItemStyled>
        )}
        {ended && !defaultDate && (
          <WorkItemStyled>
            <TitleStyled>Job Ends:</TitleStyled>
            <WorkContentStyled>{ended}</WorkContentStyled>
          </WorkItemStyled>
        )}
        {!defaultDate && !defaultYearDate && (
          <UnderLineStyled style={{ marginTop: '10px' }} />
        )}
      </WorkRightSideStyled>
    </CvWorkStyled>
  );
};
