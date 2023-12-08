import { UseFormRegister } from "react-hook-form";
import { languageLevels } from "../../utils/language-services";
import {
  LanguagaContentStyled,
  LanguageInputStyled,
  LanguageOptionStyled,
  LanguageSelectStyled,
  LanguageStyled,
} from "./styled";

export const Language = ({
  register,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: {register: UseFormRegister<any>}) => {
  return (
    <LanguageStyled>
      <LanguagaContentStyled>
        <div>
          <div>Languges</div>
            <LanguageInputStyled {...register!('language')}/>
        </div>
       
        <div>
        <div>Level</div>

          <LanguageSelectStyled {...register!('level')}>
            {languageLevels.map((level) => (
              <LanguageOptionStyled key={level}>{level}</LanguageOptionStyled>
            ))}
          </LanguageSelectStyled>
        </div>
      </LanguagaContentStyled>
    </LanguageStyled>
  );
};
