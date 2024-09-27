import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./store.types.ts";

const initialState: IUserState = {
  firstname: null,
  lastname: null,
  email: null,
  token: null,
};

// Create the user slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: IUserState, action: PayloadAction<IUserState>): void => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state: IUserState): void => {
      state.firstname = null;
      state.lastname = null;
      state.email = null;
      state.token = null;
    },
  },
});

// Export the actions
export const { setUser, logout } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;