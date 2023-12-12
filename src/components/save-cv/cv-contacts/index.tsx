import { usePersonal } from "../../../hooks/useContacts";
import { useUserData } from "../../../hooks/useUser";
import {
  CvContentStyled,
  CvLeftSideStyled,
  CvRightSideStyled,
  DescriptionStyled,
  DescriptionTitleStyled,
  EmailIconStyled,
  LineBlockStyled,
  LocationIconStyled,
  PhoneIconStyled,
  RightContentStyled,
  RightTextStyled,
  UnderLineStyled,
} from "../cv-contacts/styled";

export const CvContacts = () => {
  const { user } = usePersonal();
  const { description, personalData } = useUserData(user);

  return (
    <CvContentStyled>
      <CvLeftSideStyled>
        <DescriptionTitleStyled>Work Description</DescriptionTitleStyled>
        <DescriptionStyled>{description}</DescriptionStyled>
        <UnderLineStyled />
      </CvLeftSideStyled>
      <CvRightSideStyled>
        <RightContentStyled>
          <EmailIconStyled />
          <RightTextStyled>{personalData!.email}</RightTextStyled>
        </RightContentStyled>
        {personalData!.phoneNumber ? (
          <RightContentStyled>
            <PhoneIconStyled />
            <RightTextStyled>{personalData!.phoneNumber}</RightTextStyled>
          </RightContentStyled>
        ) : (
          <RightContentStyled>
            <PhoneIconStyled />
            <RightTextStyled>Empty Number</RightTextStyled>
          </RightContentStyled>
        )}
        {personalData!.location ? (
          <RightContentStyled>
            <PhoneIconStyled />
            <RightTextStyled>{personalData!.city}</RightTextStyled>
          </RightContentStyled>
        ) : (
          <RightContentStyled>
            <LocationIconStyled />
            <RightTextStyled>Empty Location</RightTextStyled>
          </RightContentStyled>
        )}
        <LineBlockStyled>
          <UnderLineStyled />
        </LineBlockStyled>
      </CvRightSideStyled>
     
    </CvContentStyled>
  );
};
