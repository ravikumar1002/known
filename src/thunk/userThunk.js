
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  editUser,
  getAllUsers,
  getUser,
} from "../services";

export const getAllUsersThunk = createAsyncThunk(
  "/users/getUsers",
  async () => {
    try {
      const response = await getAllUsers();
      return response.data.users;
    } catch (error) {
      console.error(error.response.data);
    }
  }
);

export const loadUserDetailsThunk = createAsyncThunk(
  "/profile/loadUserDetails",
  async (username, { rejectWithValue }) => {
    console.log(username)
    try {
      const response = await getUser(username);
      return response.data.user;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

export const editUserProfileThunk = createAsyncThunk(
  "authenticate/editUserProfile",
  async ({ userDetails, authToken }, { rejectWithValue }) => {
    try {
      const resp = await editUser(userDetails, authToken);
      return resp.data.user;
    } catch (error) {
      toast.error("Couldn't Edit Profile! Please try again.");
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
