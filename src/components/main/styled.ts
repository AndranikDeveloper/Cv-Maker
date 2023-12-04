import styled from "styled-components";

export const MainStyled = styled.div`
    height: calc(100vh - (100vh - 700px));
`;
export const MainContainerStyled = styled.div`
  padding: 78px 88px;
  display: flex;
  align-items: end;
  height: 100%;
  
`;

export const MainButtonsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ButtonStyled = styled.button`
  border-radius: 10px;
  background: #c4c4c4;
  width: 200px;
  height: 60px;
  flex-shrink: 0;
  border: none;
  color: #000;
  font-family: SF Compact Display, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.2px;
  cursor: pointer;

  &:active {
    background: #66FF99;
  }
`;
