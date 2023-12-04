import {
  createUser,
  firstInputs,
  secondInputs,
  thirdInputs,
} from '../../utils/contacts-services';
import { Button } from '../button';
import { Input } from '../input';
import {
  MiddleInputsStyled,
  ContactsContainerStyled,
  ContactsContentStyled,
  FileLabelStyled,
  FilePickerStyled,
  LabelIconStyled,
  LabelStyled,
  LabelTextStyled,
  LeftSideStyled,
  TopButtonsStyled,
  TopStyled,
  BottomInputsStyled,
  ButtonPositionStyled,
  DetailsStyled,
  DetailsTextStyled,
  DetailsIconStyled,
  ChosenImageStyled,
  DeleteImageStyled,
  BackIconStyled,
  ForwardIconStyled,
  MovementButtonsBlockStyled,
  ButtonWrapperStyled,
} from './styled';
import plusIcon from '../../assets/plus.svg';
import { Steps } from '../steps';
import { useContacts } from '../../hooks/contacts-hook';

export const Contacts = () => {
  const { img, register, setImg, reset, handleSubmit, dispatch, navigate } =
    useContacts();

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
            <TopStyled>
              {img ? (
                <>
                  <ChosenImageStyled src={img} />
                  <DeleteImageStyled onClick={() => setImg('')} />
                </>
              ) : (
                <LeftSideStyled>
                  <FileLabelStyled htmlFor='photo'>
                    <LabelStyled>
                      <LabelIconStyled />
                      <LabelTextStyled>add photo</LabelTextStyled>
                    </LabelStyled>
                  </FileLabelStyled>
                  <FilePickerStyled
                    type='file'
                    id='photo'
                    {...register('photo', { required: true })}
                    onChange={(e) =>
                      setImg(URL.createObjectURL(e.target.files![0]))
                    }
                    accept='image/png, image/svg, image/jpeg'
                  />
                </LeftSideStyled>
              )}

              <TopButtonsStyled>
                {firstInputs.map(({ placeholder, required, title, name }) => (
                  <Input
                    key={title}
                    placeholder={placeholder}
                    required={required}
                    title={title}
                    name={name}
                    register={register}
                  />
                ))}
              </TopButtonsStyled>
            </TopStyled>

            <MiddleInputsStyled>
              {secondInputs.map(({ placeholder, required, title, name }) => (
                <Input
                  key={title}
                  placeholder={placeholder}
                  required={required}
                  title={title}
                  name={name}
                  register={register}
                />
              ))}
            </MiddleInputsStyled>

            <BottomInputsStyled>
              {thirdInputs.map(({ placeholder, required, title, name }) => (
                <Input
                  key={title}
                  placeholder={placeholder}
                  required={required}
                  title={title}
                  name={name}
                  register={register}
                />
              ))}
            </BottomInputsStyled>
          </ContactsContentStyled>
          <DetailsStyled>
            <DetailsIconStyled src={plusIcon} />
            <DetailsTextStyled>other details</DetailsTextStyled>
          </DetailsStyled>
        </ContactsContainerStyled>
        <ButtonPositionStyled>
          <Button type='submit' path='/work-experience' />
        </ButtonPositionStyled>
      </form>
    </div>
  );
};
