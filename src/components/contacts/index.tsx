import { contactsData } from '../../utils/contacts-services';
import { createUser } from '../../utils/create-user-services';
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
  const { reset, handleSubmit, dispatch, navigate, register, navigatePath } = usePersonal();
  const [img, setImg] = useState('')
  const path = '/work-experience';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmitLogic(data: any) {
    const newData = {
      ...data,
      photo: img
    }
    
    createUser(dispatch, newData, reset, navigate, navigatePath, createUserData)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitLogic)}
      >
        <ContactsContainerStyled>
          <Arrows path={path} />
          <Steps />
          <ContactsContentStyled>
            {contactsData.map(({ component, ...props }) => (
              <React.Fragment key={props.name}>
                {
                  component({
                    register,
                    ...props,
                    setImg,
                    img
                  })
                }
              </React.Fragment>
            )
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
