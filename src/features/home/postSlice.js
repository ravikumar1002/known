import { createSlice } from "@reduxjs/toolkit";
import {
  getPostsThunk,
  addPostThunk,
  editPostThunk,
  deletePostThunk,
  likePostThunk,
  dislikePostThunk,
} from "../../thunk";

const initialState = {
  posts: [],
  userPosts: [],
  postStatus: "idle",
  likeDislikeStatus: "idle",
  postError: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsThunk.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [getPostsThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.postStatus = "fulfilled";
    },
    [getPostsThunk.rejected]: (state, action) => {
      state.postError = action.payload;
      state.postStatus = "idle";
    },
    [addPostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [addPostThunk.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [deletePostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [deletePostThunk.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [editPostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [editPostThunk.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [likePostThunk.pending]: (state, action) => {
      state.likeDislikeStatus = "pending";
    },
    [likePostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.likeDislikeStatus = "fulfilled";
    },
    [likePostThunk.rejected]: (state, action) => {
      state.postError = action.payload;
      state.likeDislikeStatus = "idle";
    },
    [dislikePostThunk.pending]: (state, action) => {
      state.likeDislikeStatus = "pending";
    },
    [dislikePostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.likeDislikeStatus = "fulfilled";
    },
    [dislikePostThunk.rejected]: (state, action) => {
      state.postError = action.payload;
      state.likeDislikeStatus = "idle";
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { changeSorting, setPageNum } = postsSlice.actions;
