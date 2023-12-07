import { IInformationProps } from "../../types/information-types";
import { languageLevels } from "../../utils/language-services";
import {
  LanguagaContentStyled,
  LanguageInputStyled,
  LanguageOptionStyled,
  LanguageSelectStyled,
  LanguageStyled,
} from "./styled";

export const Language = ({
  name,
  register,
  sectionName,
}: IInformationProps) => {
  return (
    <LanguageStyled>
      <LanguagaContentStyled>
        <div>
          <div>{sectionName}</div>
          <LanguageInputStyled />
        </div>
        <>
        <div>Level</div>
          <LanguageSelectStyled {...register!(name)}>
            {languageLevels.map((level) => (
              <LanguageOptionStyled key={level}>{level}</LanguageOptionStyled>
            ))}
          </LanguageSelectStyled>
        </>
      </LanguagaContentStyled>
    </LanguageStyled>
  );
};
