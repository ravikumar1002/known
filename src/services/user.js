import axios from "axios";

export const editUser = (userData, authorization) => {
  return axios.post(
    "/api/users/edit",
    { userData },
    {
      headers: { authorization },
    }
  );
};

export const getAllUsers = () => axios.get("/api/users");

export const getUser = (username) => {
  return axios.get(`/api/users/${username}`);
};
