import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContactsInitialState } from '../types/contacts-types';
import { IContactsInfo } from '../types/input-types';

const initialState: IContactsInitialState = {
  user: null,
};

const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState,
  reducers: {
    createCv(state, action: PayloadAction<IContactsInfo>) {
      state.user = action.payload;
    },
  },
});

export default contactsSlice.reducer;
export const { createCv } = contactsSlice.actions;
