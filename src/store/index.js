import { configureStore } from "@reduxjs/toolkit";
import { authReducer , postsReducer} from "../features";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
