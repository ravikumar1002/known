import axios from "axios";

export const getCommentsOfPostFromServer = (postId) =>
  axios.get(`/api/comments/${postId}`);

export const addCommentToPostInServer = (
  postId,
  commentData,
  authorization
) => {
  return axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization } }
  );
};
export const editCommentInServer = (
  postId,
  commentId,
  commentData,
  authorization
) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    { headers: { authorization } }
  );

export const deleteCommentFromServer = (postId, commentId, authorization) =>
  axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: { authorization },
  });
