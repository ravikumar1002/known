import {followUserInServer, unfollowUserInServer } from "../services"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const followUserThunk = createAsyncThunk(
  "/auth/followUser",
  async ({ followUserId, authToken }, { rejectWithValue }) => {
    try {
      const response = await followUserInServer(followUserId, authToken);
      console.log(response)
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      toast.error("Couldn't follow user!");
      return rejectWithValue(error.response.data);
    }
  }
);

export const unfollowUserThunk = createAsyncThunk(
  "/auth/unfollowUser",
  async ({ followUserId, authToken }, { rejectWithValue }) => {
    try {
      const response = await unfollowUserInServer(followUserId, authToken);
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      toast.error("Couldn't unfollow user!");
      return rejectWithValue(error.response.data);
    }
  }
);
