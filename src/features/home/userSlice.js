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
  },
});

export const usersReducer = usersSlice.reducer;
