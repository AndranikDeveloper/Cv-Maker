import { createSlice } from '@reduxjs/toolkit';
import { IStepsInitialState } from '../types/steps-types';

const initialState: IStepsInitialState = {
  step: 0,
};

const stepsSlice = createSlice({
  name: 'stepsSlice',
  initialState,
  reducers: {
    switchStep(state) {
      state.step += 1;
    },
  },
});

export default stepsSlice.reducer;
export const { switchStep } = stepsSlice.actions;
