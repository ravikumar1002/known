import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../../features";
import { loadUserDetailsThunk, loadUserPostsThunk } from "../../thunk";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileDetails: null,
    postsDetails: [],
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.profileDetails = null;
      state.postsDetails = [];
    },
    [loadUserDetailsThunk.fulfilled]: (state, action) => {
      state.profileDetails = action.payload;
    },
    [loadUserDetailsThunk.rejected]: (state, action) => {
      console.error(action.payload);
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
