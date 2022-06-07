export { loginCall, signUpCall } from "./auth";
export {
  getAllPostsFromServer,
  getAllPostsOfUserFromServer,
  addPostToServer,
  editPostInServer,
  deletePostFromServer,
  likePostInServer,
  dislikePostInServer,
} from "./post";

export {
  getCommentsOfPostFromServer,
  addCommentToPostInServer,
  editCommentInServer,
  deleteCommentFromServer,
} from "./commetns";

export { editUser, getAllUsers, getUser } from "./user";

export { followUserInServer, unfollowUserInServer } from "./follow";

export {addBookmarkInServer, removeBookmarkFromServer} from "./bookmark"

