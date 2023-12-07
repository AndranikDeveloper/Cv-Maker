import { ReferenceInputStyled } from "../styled";

interface InputProps {
    title: string
}


export const ReferenceInput = ({title}: InputProps) => {
    console.log(title);
    
  return (
    <>
        <div>{title}</div>
        <ReferenceInputStyled />
    </>
  )
}
