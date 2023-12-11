import styled from "styled-components";
import { FaDownload } from "react-icons/fa";

export const SaveStyled = styled.div`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const SaveButtonStyled = styled.button`
  width: 200px;
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
export const ButtonTextStyled = styled.span`
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 21.429px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.214px;
`;
export const SaveIconStyled = styled(FaDownload)`
  color: white;
  width: 30px;
  height: 30px;
`;
