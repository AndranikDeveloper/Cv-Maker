import { usePersonal } from '../../hooks/useContacts';
import { downloadCV } from '../../utils/save-services';
import {
  ButtonTextStyled,
  SaveButtonStyled,
  SaveIconStyled,
  SaveStyled,
} from './styled';

export const SaveCv = () => {
  const { user } = usePersonal();
  console.log(user);
  return (
    <SaveStyled>
      <SaveButtonStyled>
        <SaveIconStyled />
        <ButtonTextStyled onClick={() => downloadCV('http://localhost', user)}>
          Download
        </ButtonTextStyled>
      </SaveButtonStyled>
    </SaveStyled>
  );
};
