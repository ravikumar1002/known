import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, signupThunk} from "../../thunk";

const initialState = {
  authToken: localStorage.getItem("authToken") ?? "",
  authUser: JSON.parse(localStorage.getItem("authUser")) ?? {},
  authStatus: "idle",
  authError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
      state.authToken = null;
      state.authUser = null;
      state.authStatus = "idle";
      state.authError = null;
    },
  },
  extraReducers: {
    [loginThunk.pending]: (state) => {
      state.authStatus = "pending";
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.authToken = action.payload?.encodedToken;
      state.authUser = action.payload?.foundUser;
      localStorage.setItem("authToken", state?.authToken);
      localStorage.setItem("authUser", JSON.stringify(state?.authUser));
    },
    [loginThunk.rejected]: (state, action) => {
      state.authStatus = "Error";
      state.authError = action.payload;
    },
    [signupThunk.pending]: (state) => {
      state.authStatus = "pending";
    },
    [signupThunk.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.authToken = action.payload?.encodedToken;
      state.authUser = action.payload?.createdUser;
      localStorage.setItem("authToken", state?.authToken);
      localStorage.setItem("authUser", JSON.stringify(state?.authUser));
    },
    [signupThunk.rejected]: (state, action) => {
      state.authStatus = "Error";
      state.authError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logoutUser } = authSlice.actions;
