import { contactsData, createUser } from '../../utils/contacts-services';
import { Button } from '../button';
import {
  ContactsContainerStyled,
  ContactsContentStyled,
  ButtonPositionStyled,
  DetailsStyled,
  DetailsTextStyled,
  DetailsIconStyled,
} from './styled';
import plusIcon from '../../assets/plus.svg';
import { Steps } from '../steps';
import { useContacts } from '../../hooks/useContacts';
import { Arrows } from '../arrows';

export const Contacts = () => {
  const { reset, handleSubmit, dispatch, navigate, register } = useContacts();
  const path = '/work-experience';

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) =>
          createUser(dispatch, data, reset, navigate, path)
        )}
      >
        <ContactsContainerStyled>
          <Arrows path={path} />
          <Steps />
          <ContactsContentStyled>
            {contactsData.map(({ component, ...props }) =>
              component({
                register,
                ...props,
              })
            )}
          </ContactsContentStyled>
          <DetailsStyled>
            <DetailsIconStyled src={plusIcon} />
            <DetailsTextStyled>other details</DetailsTextStyled>
          </DetailsStyled>
        </ContactsContainerStyled>
        <ButtonPositionStyled>
          <Button type='submit' />
        </ButtonPositionStyled>
      </form>
    </div>
  );
};
