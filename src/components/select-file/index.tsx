import { useContacts } from '../../hooks/contacts-hook';
import { IInput } from '../../types/input-types';
import {
  DeleteImageStyled,
  FileLabelStyled,
  FilePickerStyled,
  LabelIconStyled,
  LabelStyled,
  LabelTextStyled,
} from '../contacts/styled';

export const SelectFile = ({ register, styles }: IInput) => {
  const { img, setImg } = useContacts();
  return (
    <div style={img ? {} : styles}>
      {img ? (
        <>
          <img
            src={img}
            style={{
              width: '60px',
              height: '60px',
            }}
          />
          <DeleteImageStyled onClick={() => setImg('')} />
        </>
      ) : (
        <>
          <FileLabelStyled htmlFor='photo'>
            <LabelStyled>
              <LabelIconStyled />
              <LabelTextStyled>add photo</LabelTextStyled>
            </LabelStyled>
          </FileLabelStyled>
          <FilePickerStyled
            type='file'
            id='photo'
            {...register('photo')}
            accept='image/png, image/svg, image/jpeg'
            onChange={(e) => setImg(URL.createObjectURL(e.target.files![0]))}
          />
        </>
      )}
    </div>
  );
};
