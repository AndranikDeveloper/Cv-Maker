import { createSlice } from '@reduxjs/toolkit';
import { IUserInitialState } from '../types/contacts-types';

const initialState: IUserInitialState = {
  user: null,
};

const workExperience = createSlice({
  name: 'workExperience',
  initialState,
  reducers: {
    createWorkExperience(state, action) {
      state.user = action.payload;
    },
  },
});

export default workExperience.reducer;
export const { createWorkExperience } = workExperience.actions;
