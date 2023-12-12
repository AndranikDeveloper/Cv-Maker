import { usePersonal } from '../../../hooks/useContacts';
import { useUserData } from '../../../hooks/useUser';
import { UnderLineStyled } from '../cv-contacts/styled';
import {
  ContentStyled,
  CvEducationStyled,
  ItemContentStyled,
  ItemTitleStyled,
  LeftItemStyled,
  LeftSideEducationStyled,
  RightItemStyled,
  RightSideEducationStyled,
} from './styled';

export const CvEducation = () => {
  const { user } = usePersonal();
  const {
    school,
    degree,
    startEducationDate,
    startEducationYear,
    endEducationDate,
    endEducationYear,
    subject,
    defaultEducationDate,
    defaultYearEducationDate,
  } = useUserData(user);
  console.log(
    school,
    degree,
    startEducationDate,
    startEducationYear,
    endEducationDate,
    endEducationYear
  );

  return (
    <CvEducationStyled>
      <ContentStyled>
        {(school !== '' || subject !== '' || degree !== '') && (
          <LeftSideEducationStyled>
            <LeftItemStyled>
              <ItemTitleStyled>School:</ItemTitleStyled>
              <ItemContentStyled>{school}</ItemContentStyled>
            </LeftItemStyled>
            <LeftItemStyled>
              <ItemTitleStyled>Subject:</ItemTitleStyled>
              <ItemContentStyled>{subject}</ItemContentStyled>
            </LeftItemStyled>
            <LeftItemStyled>
              <ItemTitleStyled>Degree:</ItemTitleStyled>
              <ItemContentStyled>{degree}</ItemContentStyled>
            </LeftItemStyled>
            <UnderLineStyled style={{ marginTop: '10px' }} />
          </LeftSideEducationStyled>
        )}
        {!defaultEducationDate && !defaultYearEducationDate && (
          <RightSideEducationStyled>
            <RightItemStyled>
              <ItemTitleStyled>Start:</ItemTitleStyled>
              <ItemContentStyled>
                {startEducationDate + ' ' + startEducationYear}
              </ItemContentStyled>
            </RightItemStyled>
            <RightItemStyled>
              <ItemTitleStyled>End:</ItemTitleStyled>
              <ItemContentStyled>
                {endEducationDate + ' ' + endEducationYear}
              </ItemContentStyled>
            </RightItemStyled>
            <UnderLineStyled style={{ marginTop: '20px' }} />
          </RightSideEducationStyled>
        )}
      </ContentStyled>
    </CvEducationStyled>
  );
};
