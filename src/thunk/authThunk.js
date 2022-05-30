import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginCall, signUpCall } from "../services";

export const signupThunk = createAsyncThunk(
  "auth/signupUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await signUpCall(userDetails);
      return response.data;
    } catch (error) {
      console.error(error);
     return rejectWithValue(error.response);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password },  { rejectWithValue }) => {
    try {
      const loginResponse = await loginCall(username, password);
      return loginResponse.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);
