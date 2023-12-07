import { CSSProperties, styled } from "styled-components";
import { FaCamera } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ContactsStyled = styled.div``;
export const ContactsContentStyled = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 99px repeat(2, 109px);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 11px;
  grid-row-gap: 11px;
`;
export const ContactsContainerStyled = styled.div`
  padding: 0 24px;
`;

export const MovementButtonsBlockStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const ButtonWrapperStyled = styled.button`
  border: none;
  background-color: transparent;
`;
export const ForwardIconStyled = styled(IoIosArrowForward)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const BackIconStyled = styled(IoIosArrowBack)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const LeftSideStyled = styled.div`
  width: 99px;
  background-color: #c7c7c7;
  border-radius: 10px;
`;
export const ChosenImageStyled = styled.img`
  width: 100px;
  height: 100px;
`;
export const DeleteImageStyled = styled(RxCross1)`
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
export const TopStyled = styled.div`
  display: flex;
  text-align: center;
  column-gap: 13px;
`;

export const FilePickerStyled = styled.input`
  visibility: hidden;
`;
export const FileLabelStyled = styled.label`
  cursor: pointer;
  height: 100%;
`;

export const FileContentStyled = styled.div``;
export const LabelStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 23px;
  gap: 22px;
`;
export const LabelTextStyled = styled.div`
  color: #323232;
  font-family: SF Pro Text;
  font-size: 14.371px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.104px;
  width: 100%;
  white-space: nowrap;
`;
export const LabelIconStyled = styled(FaCamera)`
  width: 35px;
  height: 35px;
`;

export const TopButtonsStyled = styled.div`
  width: 100%;
`;
export const MiddleInputsStyled = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BottomInputsStyled = styled.div`
  margin-top: 10px;
  display: flex;
  column-gap: 24px;
  flex-shrink: 2;
`;

export const DetailsStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  column-gap: 7px;
`;

export const DetailsTextStyled = styled.span`
  color: #000;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.12px;
`;
export const DetailsIconStyled = styled.img`
  cursor: pointer;
`;
export const ButtonPositionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  img: string
  styles: CSSProperties
}

export const ImageWrapperStyled = styled.div<Props>`
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${({styles}) => styles && {...styles}}
`
