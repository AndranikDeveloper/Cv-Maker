import { createSlice } from "@reduxjs/toolkit";

const initialState: { path: string } = {
  path: "/contacts",
};

const navigatePathSlice = createSlice({
  name: "navigatePathSlice",
  initialState,
  reducers: {
    setPath(state, action) {
      state.path = action.payload;
    },
  },
});

export default navigatePathSlice.reducer;
export const { setPath } = navigatePathSlice.actions;
