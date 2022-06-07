import { addBookmarkInServer, removeBookmarkFromServer } from "../services";

export const addBookmarkThunk = createAsyncThunk(
  "auth/addBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await addBookmarkInServer(postId, authToken);
      return response.data.bookmarks;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);

export const removeBookmarkThunk = createAsyncThunk(
  "auth/removeBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await removeBookmarkFromServer(postId, authToken);
      return response.data.bookmarks;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);
