import { createSlice } from '@reduxjs/toolkit';
import { IWorkExperienceInitialState } from '../types/work-experience-types';

const initialState: IWorkExperienceInitialState = {
  userWorks: null,
};

const workExperience = createSlice({
  name: 'workExperience',
  initialState,
  reducers: {
    createWorkExperience(state, action) {
      state.userWorks = action.payload;
    },
  },
});

export default workExperience.reducer;
export const { createWorkExperience } = workExperience.actions;
