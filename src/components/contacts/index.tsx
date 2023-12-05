import { contactsData, createUser } from "../../utils/contacts-services";
import { Button } from "../button";
import {
  ContactsContainerStyled,
  ContactsContentStyled,
  ButtonPositionStyled,
  DetailsStyled,
  DetailsTextStyled,
  DetailsIconStyled,
  BackIconStyled,
  ForwardIconStyled,
  MovementButtonsBlockStyled,
  ButtonWrapperStyled,
} from "./styled";
import plusIcon from "../../assets/plus.svg";
import { Steps } from "../steps";
import { useContacts } from "../../hooks/contacts-hook";

export const Contacts = () => {
  const { reset, handleSubmit, dispatch, navigate, register } = useContacts();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => createUser(dispatch, data, reset))}
      >
        <ContactsContainerStyled>
          <MovementButtonsBlockStyled>
            <BackIconStyled onClick={() => navigate(-1)} />
            <ButtonWrapperStyled
              onSubmit={handleSubmit((data) =>
                createUser(dispatch, data, reset)
              )}
            >
              <ForwardIconStyled />
            </ButtonWrapperStyled>
          </MovementButtonsBlockStyled>
          <Steps />
          <ContactsContentStyled>
            {contactsData.map(({ component, ...props }) => (
                component({
                  register,
                  ...props,
                })
            ))}
          </ContactsContentStyled>
          <DetailsStyled>
            <DetailsIconStyled src={plusIcon} />
            <DetailsTextStyled>other details</DetailsTextStyled>
          </DetailsStyled>
        </ContactsContainerStyled>
        <ButtonPositionStyled>
          <Button type="submit" />
        </ButtonPositionStyled>
      </form>
    </div>
  );
};
