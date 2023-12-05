import { useContacts } from '../../hooks/contacts-hook';
import { createUser } from '../../utils/contacts-services';
import {
  BackIconStyled,
  ButtonWrapperStyled,
  ForwardIconStyled,
  MovementButtonsBlockStyled,
} from '../contacts/styled';

export const Arrows = ({ path }: { path: string }) => {
  const { dispatch, handleSubmit, reset, navigate } = useContacts();
  return (
    <MovementButtonsBlockStyled>
      <BackIconStyled onClick={() => navigate(-1)} />
      <ButtonWrapperStyled
        onSubmit={handleSubmit((data) =>
          createUser(dispatch, data, reset, navigate, path)
        )}
      >
        <ForwardIconStyled />
      </ButtonWrapperStyled>
    </MovementButtonsBlockStyled>
  );
};
