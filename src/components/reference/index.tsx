import { UseFormRegister } from "react-hook-form";
import {
  InputStyled,
  InputTextStyled,
  ReferenceContentStyled,
  ReferenceInputStyled,
  ReferenceStyled,
  ReferenceTopStyled,
  ReferenceBottomStyled,
  ReferenceTextAreaStyled,
} from "./styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Reference = ({ register }: { register: UseFormRegister<any> }) => {

  return (
    <ReferenceStyled>
      <ReferenceContentStyled>
        <ReferenceTopStyled>
          <InputStyled>
            <InputTextStyled>Company Name</InputTextStyled>
            <ReferenceInputStyled {...register("company")} />
          </InputStyled>
          <InputStyled>
            <InputTextStyled>Contact Person</InputTextStyled>
            <ReferenceInputStyled {...register("contact")} />
          </InputStyled>
          <InputStyled>
            <InputTextStyled>Phone Number</InputTextStyled>
            <ReferenceInputStyled {...register("phone")} />
          </InputStyled>
          <InputStyled>
            <InputTextStyled>Email Address</InputTextStyled>
            <ReferenceInputStyled {...register("email")} />
          </InputStyled>
        </ReferenceTopStyled>

        <ReferenceBottomStyled>
          <div>Description</div>
          <ReferenceTextAreaStyled
            placeholder="Add a few notes about your reference. Where you worked, how do you know this reference etc. "
            {...register("textarea")}
          />
        </ReferenceBottomStyled>
      </ReferenceContentStyled>
    </ReferenceStyled>
  );
};
