import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPostsFromServer,
  getAllPostsOfUserFromServer,
  addPostToServer,
  editPostInServer,
  deletePostFromServer,
  likePostInServer,
  dislikePostInServer,
} from "../services";

export const getPostsThunk = createAsyncThunk(
  "/posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllPostsFromServer();
      return response.data.posts;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

export const addPostThunk = createAsyncThunk(
  "/posts/addPost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    console.log(postData, authToken);
    try {
      const response = await addPostToServer(postData, authToken);
      return response.data.posts;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

export const editPostThunk = createAsyncThunk(
  "/posts/editPost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    try {
      const response = await editPostInServer(postData, authToken);
      return response.data.posts;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

export const deletePostThunk = createAsyncThunk(
  "/posts/deletePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await deletePostFromServer(postId, authToken);
      return response.data.posts;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

export const likePostThunk = createAsyncThunk(
  "/posts/likePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await likePostInServer(postId, authToken);
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const dislikePostThunk = createAsyncThunk(
  "/posts/dislikePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await dislikePostInServer(postId, authToken);
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
