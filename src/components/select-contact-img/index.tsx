import { usePersonal } from "../../hooks/useContacts";
import { IInput } from "../../types/input-types";
import {
  DeleteImageStyled,
  FileContentStyled,
  FileLabelStyled,
  FilePickerStyled,
  ImageWrapperStyled,
  LabelIconStyled,
  LabelStyled,
  LabelTextStyled,
} from "../contacts/styled";

export const SelectFile = ({  styles, register, setImg, img }: IInput) => {
  const { setValue } = usePersonal();

  function setInRegister(e: React.ChangeEvent<HTMLInputElement>) {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const photo = fileInput.files[0];
      const objectUrl = URL.createObjectURL(photo);
      console.log(objectUrl)
      setValue('photo', objectUrl)
      setImg!(objectUrl)
    }
  }

  return (
    <div style={styles}>
      <FileContentStyled>
        {img ? (
          <>
            <ImageWrapperStyled img={img || ""} styles={styles || {}}>
              <DeleteImageStyled onClick={() => setImg!("")} />
            </ImageWrapperStyled>
          </>
        ) : (
          <div>
            <FileLabelStyled htmlFor="photo">
              <LabelStyled>
                <LabelIconStyled />
                <LabelTextStyled>add photo</LabelTextStyled>
              </LabelStyled>
            </FileLabelStyled>
            <FilePickerStyled
            {...register('photo')}
              type="file"
              id="photo"
              accept="image/png, image/svg, image/jpeg"
              onChange={setInRegister}
            />
          </div>
        )}
      </FileContentStyled>
    </div>
  );
};
