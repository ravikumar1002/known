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

export {
  getAllUserService,
  followUserService,
  unFollowUserService,
} from "./user";
