import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInitialState } from '../types/contacts-types';

const initialState: IUserInitialState = {
  user: null,
};

const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState,
  reducers: {
    createContacts(state, action: PayloadAction<Record<string, string>>) {
      state.user = action.payload;
    },
  },
});

export default contactsSlice.reducer;
export const { createContacts } = contactsSlice.actions;
