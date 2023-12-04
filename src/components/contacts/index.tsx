import {
  fisrtInputs,
  secondInputs,
  thirdInputs,
} from "../../utils/contacts-services";
import { Button } from "../button";
import { Input } from "../input";
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
} from "./styled";
import plusIcon from "../../assets/plus.svg";
import { Steps } from "../steps";
import { useForm } from "react-hook-form";
import { IContactsInfo } from "../../types/input-types";

export const Contacts = () => {
  const { register, handleSubmit, reset } = useForm<IContactsInfo>();

  const mySubmit = (data: IContactsInfo) => {
    console.log(data.photo[0]);
    reset()
  };

  return (
    <div>
      <form onSubmit={handleSubmit(mySubmit)}>
        <ContactsContainerStyled>
          <Steps />
          <ContactsContentStyled>
            <TopStyled>
              <LeftSideStyled>
                <FileLabelStyled htmlFor="photo">
                  <LabelStyled>
                    <LabelIconStyled />
                    <LabelTextStyled>add photo</LabelTextStyled>
                  </LabelStyled>
                </FileLabelStyled>
                <FilePickerStyled
                  type="file"
                  id="photo"
                  {...register("photo", {required: true})}
                  accept="image/png"
                />
              </LeftSideStyled>

              <TopButtonsStyled>
                {fisrtInputs.map(({ placeholder, required, title, name }) => (
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
          <Button type="submit" />
        </ButtonPositionStyled>
      </form>
    </div>
  );
};
