import axios from "axios";

export const getAllPostsFromServer = () => axios.get("/api/posts");

export const getAllPostsOfUserFromServer = (username) =>
  axios.get(`/api/posts/user/${username}`);

export const addPostToServer = (postData, authorization) =>
  axios.post("/api/posts", { postData }, { headers: { authorization } });

export const editPostInServer = (postData, authorization) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    { headers: { authorization } }
  );

export const deletePostFromServer = (postId, authorization) =>
  axios.delete(`/api/posts/${postId}`, { headers: { authorization } });

const likePostInServer = (postId, authorization) =>
  axios.post(`/api/posts/like/${postId}`, {}, { headers: { authorization } });

const dislikePostInServer = (postId, authorization) => {
  return axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization },
    }
  );
};
