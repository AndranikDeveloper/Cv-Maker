import { createSlice } from "@reduxjs/toolkit";
import { IUserInitialState } from "../types/contacts-types";

const initialState: IUserInitialState = {
  user: null,
};
const informationSlice = createSlice({
  name: "informationSlice",
  initialState,
  reducers: {
    createInformation(state, action) {
      state.user = action.payload;
    },
  },
});

export default informationSlice.reducer;
export const { createInformation } = informationSlice.actions;
