import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../../features";
import {
  followUserThunk,
  unfollowUserThunk,
  getAllUsersThunk,
} from "../../thunk";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    followStatus: "idle",
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.users = [];
    },
    [getAllUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [followUserThunk.fulfilled]: (state, action) => {
      state.users = [...state.users].map((currUser) =>
        currUser._id === action.payload.followUser._id
          ? action.payload.followUser
          : currUser
      );
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
      state.users = [...state.users].map((currUser) =>
        currUser._id === action.payload.followUser._id
          ? action.payload.followUser
          : currUser
      );
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

export const usersReducer = usersSlice.reducer;
