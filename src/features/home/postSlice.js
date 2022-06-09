import { createSlice } from "@reduxjs/toolkit";
import {
  getPostsThunk,
  addPostThunk,
  editPostThunk,
  deletePostThunk,
  likePostThunk,
  dislikePostThunk,
  getAllCommentsThunk,
  addCommentThunk,
  editCommentThunk,
  deleteCommentThunk,
} from "../../thunk";

const initialState = {
  posts: [],
  userPosts: [],
  postStatus: "idle",
  likeDislikeStatus: "idle",
  createPostStatus: "idle",
  postError: null,
  commentStatus: "idle",
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
    [addPostThunk.pending]: (state, action) => {
      state.createPostStatus = "pending";
    },
    [addPostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [addPostThunk.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [editPostThunk.pending]: (state, action) => {
      state.createPostStatus = "pending";
    },
    [editPostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [editPostThunk.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [deletePostThunk.pending]: (state, action) => {
      state.createPostStatus = "pending";
    },
    [deletePostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [deletePostThunk.rejected]: (state, action) => {
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
    [addCommentThunk.pending]: (state, action) => {
      state.commentStatus = "pending";
    },
    [addCommentThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.commentStatus = "fulfilled";
    },
    [addCommentThunk.rejected]: (state, action) => {
      state.commentStatus = "idle";
    },
    [editCommentThunk.pending]: (state, action) => {
      state.commentStatus = "pending";
    },
    [editCommentThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.commentStatus = "fulfilled";
    },
    [editCommentThunk.rejected]: (state, action) => {
      state.commentStatus = "idle";
    },
    [deleteCommentThunk.pending]: (state, action) => {
      state.commentStatus = "pending";
    },
    [deleteCommentThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.commentStatus = "fulfilled";
    },
    [deleteCommentThunk.rejected]: (state, action) => {
      state.commentStatus = "idle";
    },
  },
});

export const postsReducer = postsSlice.reducer;
