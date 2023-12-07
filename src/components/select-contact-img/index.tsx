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

export const SelectFile = ({ register, styles }: IInput) => {
  const { img, setImg } = usePersonal();
  console.log(img);
  return (
    <div style={styles}>
      <FileContentStyled>
        {img ? (
          <>
            <ImageWrapperStyled img={img || ''} styles={styles || {}}>
              <DeleteImageStyled onClick={() => setImg('')}/>
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
              type="file"
              id="photo"
              {...register("photo")}
              accept="image/png, image/svg, image/jpeg"
              onChange={(e) => setImg(URL.createObjectURL(e.target.files![0]))}
            />
          </div>
        )}
      </FileContentStyled>
    </div>
  );
};
