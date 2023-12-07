import { IEducationProps } from "../../../types/education-types"
import { degrees } from "../../../utils/education-services"
import { EducationOptionStyled, EducationSelectStyled, SelectEducationContentStyled, SelectEducationStyled } from "../styled"

export const EducationSelect = ({name, title, register, styles}: IEducationProps) => {
  return (
    <EducationSelectStyled>
        <div style={{marginLeft: '20px'}}>{title}</div>
        <SelectEducationContentStyled>
            <SelectEducationStyled style={styles} {...register(name)}>
                {
                  degrees.map(degree => (
                    <EducationOptionStyled key={degree}>{degree}</EducationOptionStyled>
                  ))
                }
            </SelectEducationStyled>
        </SelectEducationContentStyled>
    </EducationSelectStyled>
  )
}
