import axios from "axios";

export const followUserInServer = (followUserId, authorization) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization } }
  );
};
export const unfollowUserInServer = (followUserId, authorization) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization } }
  );
