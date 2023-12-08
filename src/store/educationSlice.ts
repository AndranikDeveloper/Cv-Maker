import { createSlice } from "@reduxjs/toolkit";
import { IUserInitialState } from "../types/store-types";

const initialState: IUserInitialState = {
  user: null,
};

const educationSlice = createSlice({
  name: "educationSlice",
  initialState,
  reducers: {
    createEducation(state, action) {
      state.user = action.payload;
    },
  },
});

export default educationSlice.reducer;
export const { createEducation } = educationSlice.actions;
