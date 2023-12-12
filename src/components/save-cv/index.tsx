import { usePersonal } from "../../hooks/useContacts";
import { CvContacts } from "./cv-contacts";
import { CvWork } from "./cv-work";
import {
  BlockStyled,
  ContentHeaderStyled,
  FullNameStyled,
  HeaderStyled,
  SaveContainerStyled,
  SaveStyled,
} from "./styled";

export const SaveCv = () => {
  const { user } = usePersonal();
  const personalData = user.find((el) => "firstName" in el);
  const firstLetter = personalData!.firstName[0];
  const secondLetter = personalData!.surname[0];

  console.log(user);

  return (
    <SaveStyled>
      <SaveContainerStyled>
        <ContentHeaderStyled>
          <HeaderStyled>
            <BlockStyled>
              {firstLetter} {secondLetter}
            </BlockStyled>
            <FullNameStyled>
              {personalData!.firstName} {personalData!.surname}
            </FullNameStyled>
          </HeaderStyled>
        </ContentHeaderStyled>
        <CvContacts />
        <CvWork />
      </SaveContainerStyled>
    </SaveStyled>
  );
};
