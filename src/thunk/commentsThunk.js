import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCommentsOfPostFromServer,
  addCommentToPostInServer,
  editCommentInServer,
  deleteCommentFromServer,
} from "../services";

export const getAllCommentsThunk = createAsyncThunk(
  "/posts/addComment",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await getCommentsOfPostFromServer(postId, authToken);
      return response.data.posts;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);

export const addCommentThunk = createAsyncThunk(
  "/posts/addComment",
  async ({ postId, commentData, authToken }, { rejectWithValue }) => {
    try {
      const response = await addCommentToPostInServer(
        postId,
        commentData,
        authToken
      );
      return response.data.posts;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);

export const editCommentThunk = createAsyncThunk(
  "/posts/editComment",
  async (
    { postId, commentId, commentData, authToken },
    { rejectWithValue }
  ) => {
    try {
      const response = await editCommentInServer(
        postId,
        commentId,
        commentData,
        authToken
      );
      return response.data.posts;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);

export const deleteCommentThunk = createAsyncThunk(
  "/posts/deleteComment",
  async ({ postId, commentId, authToken }, { rejectWithValue }) => {
    try {
      const response = await deleteCommentFromServer(
        postId,
        commentId,
        authToken
      );
      return response.data.posts;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);
