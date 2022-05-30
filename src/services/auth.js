import axios from "axios";

export const loginCall = (username, password) =>
  axios.post("/api/auth/login", { username, password });

export const signUpCall = (formData) => {
  return axios.post("/api/auth/signup", {
    firstName: formData.firstname,
    lastName: formData.lastname,
    username: formData.username,
    password: formData.password,
    email: formData.email,
  });
};
