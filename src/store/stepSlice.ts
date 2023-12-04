import { createSlice } from "@reduxjs/toolkit";
import { IStepsInitialState } from "../types/steps-types";

const initialState: IStepsInitialState = {
    stepNumber: 0,
};

const stepsSlice = createSlice({
  name: "stepsSlice",
  initialState,
  reducers: {
    incrementStep(state) {
      state.stepNumber += 1;
    },
  },
});

export default stepsSlice.reducer;
export const { incrementStep } = stepsSlice.actions;
