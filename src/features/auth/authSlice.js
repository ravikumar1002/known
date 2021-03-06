import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  signupThunk,
  addBookmarkThunk, 
  removeBookmarkThunk,
  editUserProfileThunk,
  followUserThunk,
  unfollowUserThunk,
} from "../../thunk";

const initialState = {
  authToken: localStorage.getItem("authToken") ?? "",
  authUser: JSON.parse(localStorage.getItem("authUser")) ?? {},
  authStatus: "idle",
  authError: null,
  bookmarkStatus: "idle",
  bookmarkError: null,
  editProfileStatus: "idle",
  followStatus: "idle",
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
      state.bookmarkStatus = "idle";
      state.bookmarkError = null;
      state.followStatus = "idle";
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
    [addBookmarkThunk.pending]: (state, action) => {
      state.bookmarkStatus = "pending";
    },
    [addBookmarkThunk.fulfilled]: (state, action) => {
      state.authUser.bookmarks = action.payload;
      state.bookmarkStatus = "fulfilled";
    },
    [addBookmarkThunk.rejected]: (state, action) => {
      state.bookmarkStatus = "rejected";
      state.bookmarkError = action.payload;
    },
    [removeBookmarkThunk.pending]: (state, action) => {
      state.bookmarkStatus = "pending";
    },
    [removeBookmarkThunk.fulfilled]: (state, action) => {
      state.authUser.bookmarks = action.payload;
      state.bookmarkStatus = "fulfilled";
    },
    [removeBookmarkThunk.rejected]: (state, action) => {
      state.bookmarkStatus = "rejected";
      state.bookmarkError = action.payload;
    },
    [editUserProfileThunk.pending]: (state) => {
      state.editProfileStatus = "pending";
    },
    [editUserProfileThunk.fulfilled]: (state, action) => {
      state.editProfileStatus = "fulfilled";
      state.authUser = action.payload;
    },
    [editUserProfileThunk.rejected]: (state, action) => {
      state.editProfileStatus = "Error";
    },
    [followUserThunk.fulfilled]: (state, action) => {
      state.authUser =action.payload.user
      state.followStatus = "fulfilled";
    },
    [followUserThunk.pending]: (state, action) => {
      state.followStatus = "pending";
    },
    [followUserThunk.rejected]: (state, action) => {
      console.error(action.payload);
      state.followStatus = "idle";
    },
    [unfollowUserThunk.fulfilled]: (state, action) => {
      state.authUser =action.payload.user
      state.followStatus = "fulfilled";
    },
    [unfollowUserThunk.pending]: (state, action) => {
      state.followStatus = "pending";
    },
    [unfollowUserThunk.rejected]: (state, action) => {
      console.error(action.payload);
      state.followStatus = "idle";
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logoutUser } = authSlice.actions;
