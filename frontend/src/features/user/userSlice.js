import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    signup: (state, action) => {},
    login: (state, action) => {},
  },
});

export const { login, signup } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
