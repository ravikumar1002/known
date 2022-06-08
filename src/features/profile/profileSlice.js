import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../../features";
import {
  // editUserProfileThunk,
  loadUserDetailsThunk,
  loadUserPostsThunk,
} from "../../thunk";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileDetails: null,
    postsDetails: [],
    profileLoading: "idle",
    postLoading: "idle",
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.profileDetails = null;
      state.postsDetails = [];
      state.profileLoading = "idle";
      state.postLoading = "idle";
    },
    [loadUserDetailsThunk.pending]: (state, action) => {
      state.profileLoading = "loading";
    },
    [loadUserDetailsThunk.fulfilled]: (state, action) => {
      state.profileLoading = "fulfilled";
      state.profileDetails = action.payload;
    },
    [loadUserDetailsThunk.rejected]: (state, action) => {
      state.profileLoading = "error";
      console.error(action.payload);
    },
    [loadUserPostsThunk.pending]: (state, action) => {
      state.postLoading = "loading";
    },
    [loadUserPostsThunk.fulfilled]: (state, action) => {
      state.postLoading = "fulfilled";
      state.postsDetails = action.payload;
    },
    [loadUserPostsThunk.rejected]: (state, action) => {
      state.postLoading = "error";
      console.error(action.payload);
    },
    
  },
});

export const profileReducer = profileSlice.reducer;
export const { resetProfile } = profileSlice.actions;
