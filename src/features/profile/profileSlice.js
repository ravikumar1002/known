import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../../features";
import {
  editUserProfileThunk,
  loadUserDetailsThunk,
  loadUserPostsThunk,
} from "../../thunk";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileDetails: null,
    postsDetails: [],
    profileLoading: "idle",
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.profileDetails = null;
      state.postsDetails = [];
      state.profileLoading = "idle";
    },
    [loadUserDetailsThunk.loading]: (state, action) => {
      state.profileLoading = "loading";
    },
    [loadUserDetailsThunk.fulfilled]: (state, action) => {
      state.profileDetails = action.payload;
    },
    [loadUserDetailsThunk.rejected]: (state, action) => {
      console.error(action.payload);
    },
    [loadUserPostsThunk.loading]: (state, action) => {
      state.profileLoading = "loading";
    },
    [loadUserPostsThunk.fulfilled]: (state, action) => {
      state.postsDetails = action.payload;
    },
    [loadUserPostsThunk.rejected]: (state, action) => {
      console.error(action.payload);
    },
    [editUserProfileThunk.pending]: (state) => {
      state.profileLoading = "pending";
    },
    [editUserProfileThunk.fulfilled]: (state, action) => {
      state.profileLoading = "fulfilled";
      state.profileDetails = action.payload;
    },
    [editUserProfileThunk.rejected]: (state, action) => {
      state.profileLoading = "Error";
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { resetProfile } = profileSlice.actions;
