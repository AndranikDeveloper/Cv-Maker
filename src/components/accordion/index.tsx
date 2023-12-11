import { Language } from '../language';
import { Reference } from '../reference';
import {
  AccordionItemsStyled,
  AccordionStyled,
  LanguageInfoStyled,
  LanguageItemStyled,
  SectionNameStyled,
  ReferenceInfoStyled,
  ReferenceItemStyled,
  LanguageIconStyled,
  ReferenceIconStyled,
} from './styled';
import arrowIcon from '../../assets/icons/arrow-icons.svg';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

export const Accordion = ({
  register,
}: {
  register: UseFormRegister<Record<string, string>>;
}) => {
  const [clickedLanguage, setClickedLanguage] = useState(false);
  const [clickedReference, setClickedReference] = useState(false);

  return (
    <AccordionStyled>
      <AccordionItemsStyled>
        <LanguageItemStyled onClick={() => setClickedLanguage((prev) => !prev)}>
          <SectionNameStyled>Languages</SectionNameStyled>
          <LanguageIconStyled
            src={arrowIcon}
            $clickedLanguage={clickedLanguage}
          />
        </LanguageItemStyled>
        {clickedLanguage && (
          <LanguageInfoStyled $clickedLanguage={clickedLanguage}>
            <Language register={register} />
          </LanguageInfoStyled>
        )}
        <ReferenceItemStyled
          onClick={() => setClickedReference((prev) => !prev)}
        >
          <SectionNameStyled>Reference</SectionNameStyled>
          <ReferenceIconStyled
            src={arrowIcon}
            $clickedReference={clickedReference}
          />
        </ReferenceItemStyled>
        {clickedReference && (
          <ReferenceInfoStyled>
            <Reference register={register} />
          </ReferenceInfoStyled>
        )}
      </AccordionItemsStyled>
    </AccordionStyled>
  );
};
