import {followUserInServer, unfollowUserInServer } from "../services"

export const followUserThunk = createAsyncThunk(
  "/users/followUser",
  async ({ followUserId, authToken, dispatch }, { rejectWithValue }) => {
    try {
      const response = await followUserInServer(followUserId, authToken);
      dispatch(editUserProfile({ userDetails: response.data.user, authToken }));
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      toast.error("Couldn't follow user!");
      return rejectWithValue(error.response.data);
    }
  }
);

export const unfollowUserThunk = createAsyncThunk(
  "/users/unfollowUser",
  async ({ followUserId, authToken, dispatch }, { rejectWithValue }) => {
    try {
      const response = await unfollowUserInServer(followUserId, authToken);
      dispatch(editUserProfile({ userDetails: response.data.user, authToken }));
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      toast.error("Couldn't unfollow user!");
      return rejectWithValue(error.response.data);
    }
  }
);
