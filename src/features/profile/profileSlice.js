import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../../features";
import { loadUserDetailsThunk, loadUserPostsThunk } from "../../thunk";

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
  },
});

export const profileReducer = profileSlice.reducer;
export const { resetProfile } = profileSlice.actions;
