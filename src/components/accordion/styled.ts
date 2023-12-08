import styled from "styled-components";

export const AccordionStyled = styled.div`
  margin-top: 35px;
`;
export const AccordionItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const LanguageItemStyled = styled.div`
  border-radius: 10px;
  background: #c4c4c4;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  cursor: pointer;
`;

interface Props1 {
  $clickedLanguage?: boolean;
  $clickedReference?: boolean;
}
export const LanguageIconStyled = styled.img<Props1>`
  transition: all 0.3s ease;
  transform: ${({ $clickedLanguage }) =>
    $clickedLanguage ? "rotate(90deg)" : "rotate(0)"};
`;
export const ReferenceIconStyled = styled.img<Props1>`
  transition: all 0.3s ease;
  transform: ${({ $clickedReference }) =>
    $clickedReference ? "rotate(90deg)" : "rotate(0)"};
`;
export const SectionNameStyled = styled.div`
  text-transform: uppercase;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

interface Props {
  $clickedLanguage?: boolean
  $clickedReference?: boolean
}
export const LanguageInfoStyled = styled.div<Props>`
   transition: ${({$clickedLanguage}) => $clickedLanguage ? "all 0.5s ease-in" : "all 0.5s cubic-bezier(0,1,0,1)"}

`;
export const ReferenceItemStyled = styled.div`
  border-radius: 10px;
  background: #c4c4c4;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  cursor: pointer;
`;
export const ReferenceInfoStyled = styled.div<Props>`
transition: ${({$clickedReference}) => $clickedReference ? "all 0.5s ease-in" : "all 0.5s cubic-bezier(0,1,0,1)"}

`;
