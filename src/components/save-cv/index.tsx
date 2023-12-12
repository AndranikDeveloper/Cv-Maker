import { usePersonal } from '../../hooks/useContacts';
import { CvContacts } from './cv-contacts';
import { CvEducation } from './cv-education';
import { CvWork } from './cv-work';
import {
  BlockStyled,
  ContentHeaderStyled,
  FullNameStyled,
  HeaderStyled,
  ImageBlockStyled,
  ImageStyled,
  SaveContainerStyled,
  SaveStyled,
} from './styled';

export const SaveCv = () => {
  const { user } = usePersonal();
  const personalData = user.find((el) => 'firstName' in el);
  const firstLetter = personalData!.firstName[0];
  const secondLetter = personalData!.surname[0];

  console.log({ name: personalData!.photo });

  return (
    <SaveStyled>
      <SaveContainerStyled>
        <ContentHeaderStyled>
          <HeaderStyled>
            {!personalData!.photo ? (
              <BlockStyled>
                {firstLetter} {secondLetter}
              </BlockStyled>
            ) : (
              <ImageBlockStyled>
                <ImageStyled src={personalData!.photo} />
              </ImageBlockStyled>
            )}
            <FullNameStyled>
              {personalData!.firstName} {personalData!.surname}
            </FullNameStyled>
          </HeaderStyled>
        </ContentHeaderStyled>
        <CvContacts />
        <CvWork />
        <CvEducation />
      </SaveContainerStyled>
    </SaveStyled>
  );
};
