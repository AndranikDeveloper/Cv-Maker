import { contactsData, onSubmitLogic } from '../../utils/contacts-services';
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
import { Arrows } from '../arrows';
import { usePersonal } from '../../hooks/useContacts';
import { createUserData } from '../../store/userSlice';
import React, { useState } from 'react';

export const Contacts = () => {
  const [img, setImg] = useState('');
  const { reset, handleSubmit, dispatch, navigate, register } = usePersonal();
  const path = '/work-experience';

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) =>
          onSubmitLogic(
            data,
            img,
            dispatch,
            reset,
            navigate,
            path,
            createUserData
          )
        )}
      >
        <ContactsContainerStyled>
          <Arrows path={path} />
          <Steps />
          <ContactsContentStyled>
            {contactsData.map(({ component, ...props }) => (
              <React.Fragment key={props.name}>
                {component({
                  register,
                  ...props,
                  setImg,
                  img,
                })}
              </React.Fragment>
            ))}
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
