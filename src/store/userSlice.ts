import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/user-types";

const initialState: IUser = {
  user: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    createUserData(state, action) {
      console.log(action.payload);
      
      state.user = [...state.user, action.payload];
    },
  },
});

export default userSlice.reducer;
export const { createUserData } = userSlice.actions;
