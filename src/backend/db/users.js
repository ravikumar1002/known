import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "user",
    lastName: "1",
    username: "user_1",
    password: "user_1",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "user",
    lastName: "2",
    username: "user2",
    password: "user2",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "user",
    lastName: "2",
    username: "user2",
    password: "user2",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "user",
    lastName: "2",
    username: "user2",
    password: "user2",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "user",
    lastName: "2",
    username: "user2",
    password: "user2",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
