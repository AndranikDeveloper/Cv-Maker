import { createSlice } from "@reduxjs/toolkit";
import { IContactsInitialState } from "../types/contacts-types";

const initialState: IContactsInitialState = {
  user: null,
};

const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {
    createCv(state, action) {
      state.user = action.payload;
    },
  },
});

export default contactsSlice.reducer;
export const { createCv } = contactsSlice.actions;
