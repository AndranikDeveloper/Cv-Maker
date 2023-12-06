import { IWorkComponentsProps } from "../../types/work-experience-types"
import { InputStyled, InputTopStyled, TopTextStyled } from "../contacts-input/styled"

export const WorkInput = ({name, workRegister, title, placeholder, styles}: IWorkComponentsProps) => {
  return (
    <div style={styles}>
      <InputTopStyled>
        <TopTextStyled>{title}</TopTextStyled>
        
      </InputTopStyled>
      <InputStyled
        style={styles}
        {...workRegister!(name)}
        name={name}
        placeholder={placeholder}
        type='text'
      />
    </div>
  )
}
