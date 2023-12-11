import { IInput } from '../../types/input-types';
import { setInRegister } from '../../utils/url-services';
import {
  DeleteImageStyled,
  FileContentStyled,
  FileLabelStyled,
  FilePickerStyled,
  ImageWrapperStyled,
  LabelIconStyled,
  LabelStyled,
  LabelTextStyled,
} from '../contacts/styled';

export const SelectFile = ({ styles, setImg, img }: IInput) => {
  return (
    <div style={styles}>
      <FileContentStyled>
        {img ? (
          <>
            <ImageWrapperStyled img={img || ''} styles={styles || {}}>
              <DeleteImageStyled onClick={() => setImg!('')} />
            </ImageWrapperStyled>
          </>
        ) : (
          <div>
            <FileLabelStyled htmlFor='photo'>
              <LabelStyled>
                <LabelIconStyled />
                <LabelTextStyled>add photo</LabelTextStyled>
              </LabelStyled>
            </FileLabelStyled>
            <FilePickerStyled
              type='file'
              id='photo'
              accept='image/png, image/svg, image/jpeg'
              onChange={(e) => setInRegister(e, setImg)}
            />
          </div>
        )}
      </FileContentStyled>
    </div>
  );
};
