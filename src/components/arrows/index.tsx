import {
  BackIconStyled,
  ButtonWrapperStyled,
  ForwardIconStyled,
  MovementButtonsBlockStyled,
} from '../contacts/styled';
import { useNavigate } from 'react-router-dom';

interface ArrowsProps {
  path: string;
}

export const Arrows = ({ path }: ArrowsProps) => {
  const navigate = useNavigate();
  return (
    <MovementButtonsBlockStyled>
      <BackIconStyled onClick={() => navigate(-1)} />
      <ButtonWrapperStyled onSubmit={() => navigate(path)}>
        <ForwardIconStyled />
      </ButtonWrapperStyled>
    </MovementButtonsBlockStyled>
  );
};
