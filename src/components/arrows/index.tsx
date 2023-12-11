import { usePersonal } from '../../hooks/useContacts';
import { setPath } from '../../store/navigatePathSlice';
import { steps } from '../../utils/steps-services';
import {
  BackIconStyled,
  ButtonWrapperStyled,
  ForwardIconStyled,
  MovementButtonsBlockStyled,
} from '../contacts/styled';

interface ArrowsProps {
  path: string;
}

export const Arrows = ({ path }: ArrowsProps) => {
  const { navigate, dispatch } = usePersonal();
  const next = steps.find((el) => el.path === path);
  const prevStep = steps.find((el) => el.count + 2 === next?.count);

  function nextStep(navigateStep: string) {
    dispatch(setPath(navigateStep));
    navigate(navigateStep);
  }

  return (
    <MovementButtonsBlockStyled>
      <BackIconStyled
        onClick={() => nextStep(prevStep === undefined ? '/' : prevStep!.path)}
      />
      <ButtonWrapperStyled onClick={() => nextStep(next!.path)}>
        <ForwardIconStyled />
      </ButtonWrapperStyled>
    </MovementButtonsBlockStyled>
  );
};
