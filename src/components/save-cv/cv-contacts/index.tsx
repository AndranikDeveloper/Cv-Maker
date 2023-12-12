import { usePersonal } from '../../../hooks/useContacts';
import { useUserData } from '../../../hooks/useUser';
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
} from '../cv-contacts/styled';

export const CvContacts = () => {
  const { user } = usePersonal();
  const { description, personalData } = useUserData(user);
  console.log(user);

  return (
    <CvContentStyled>
      {description && description !== '' && (
        <CvLeftSideStyled>
          <DescriptionTitleStyled>Work Description</DescriptionTitleStyled>
          <DescriptionStyled>{description}</DescriptionStyled>
          <UnderLineStyled />
        </CvLeftSideStyled>
      )}
      <CvRightSideStyled>
        <RightContentStyled>
          <EmailIconStyled />
          <RightTextStyled>{personalData!.email}</RightTextStyled>
        </RightContentStyled>
        {personalData!.phoneNumber && (
          <RightContentStyled>
            <PhoneIconStyled />
            <RightTextStyled>{personalData!.phoneNumber}</RightTextStyled>
          </RightContentStyled>
        )}
        {personalData!.location && (
          <RightContentStyled>
            <LocationIconStyled />
            <RightTextStyled>{personalData!.city}</RightTextStyled>
          </RightContentStyled>
        )}
        <LineBlockStyled>
          <UnderLineStyled />
        </LineBlockStyled>
      </CvRightSideStyled>
    </CvContentStyled>
  );
};
