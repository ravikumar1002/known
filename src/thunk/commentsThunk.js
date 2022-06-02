export const addComment = createAsyncThunk(
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

export const editComment = createAsyncThunk(
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

export const deleteComment = createAsyncThunk(
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
