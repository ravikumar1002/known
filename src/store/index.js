import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  postsReducer,
  profileReducer,
  usersReducer,
} from "../features";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
    profile: profileReducer,
  },
});
