import { IInformationProps } from "../../types/information-types"
import { ReferenceContentStyled, ReferenceStyled, ReferenceTopStyled } from "./styled"

export const Reference = ({name}: IInformationProps) => {
    
  return (
    <ReferenceStyled>
        <ReferenceContentStyled>
            <ReferenceTopStyled>

            </ReferenceTopStyled>
        </ReferenceContentStyled>
    </ReferenceStyled>
  )
}
