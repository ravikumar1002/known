import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "4ed82781",
    firstName: "Mercury",
    lastName: "",
    username: "mercury",
    password: "Mercury",
    bio: "The best things come from living outside of your comfort zone",
    bookmarks: [],
    profileImg:
      "https://res.cloudinary.com/kumarravi/image/upload/v1654615617/social-media/Mercury_zno1ys.jpg",
    website: "https://romabulani.netlify.app/",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "64e9b0e7",
    firstName: "Mars",
    lastName: "",
    username: "mars",
    password: "Mars",
    bio: "Scratch here ▒▒▒▒▒▒▒▒▒▒ to unveil my secret bio.",
    bookmarks: [],
    profileImg:
      "https://res.cloudinary.com/kumarravi/image/upload/v1654615613/social-media/Mars_u73iou.jpg",
    website: "https://google.com/",
    createdAt: "2022-01-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "5e24f83a",
    firstName: "Venus",
    lastName: "",
    username: "venus",
    password: "Venus",
    bio: "What should I put here?",
    bookmarks: [],
    profileImg:
      "https://res.cloudinary.com/kumarravi/image/upload/v1654615643/social-media/Venus_nwwxqd.jpg",
    website: "https://romabulani.netlify.app/",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "8975eb7e",
    firstName: "Neptune",
    lastName: "",
    username: "neptune",
    password: "Neptune",
    bio: "f I was a writer, I’d have a better Instagram bio quote",
    profileImg:
      "https://res.cloudinary.com/kumarravi/image/upload/v1654615622/social-media/Neptune_d4mm1j.jpg",
    website: "https://romabulani.netlify.app/",
    createdAt: "2022-01-03T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "5dc02a81",
    firstName: "Uranus",
    lastName: "",
    username: "uranus",
    password: "Uranus",
    bio: "f “love is in the air,” why is the air so polluted?",
    bookmarks: [],
    profileImg:
      "https://res.cloudinary.com/kumarravi/image/upload/v1654615637/social-media/Uranus_ton2b5.jpg",
    website: "https://romabulani.hashnode.dev/",
    createdAt: "2022-01-04T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "97067497",
    firstName: "Saturn",
    lastName: "",
    username: "saturn",
    password: "Saturn",
    bio: "Follow me and I’ll follow back",
    bookmarks: [],
    profileImg:
      "https://res.cloudinary.com/kumarravi/image/upload/v1654615630/social-media/Saturn_oj266y.jpg",
    website: "",
    createdAt: "2022-01-05T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "5d98463f",
    firstName: "Jupiter",
    lastName: "",
    username: "jupiter",
    password: "Jupiter",
    bio: "I believe in bee-ing myself",
    bookmarks: [],
    profileImg:
      "https://res.cloudinary.com/kumarravi/image/upload/v1654615590/social-media/Jupiter_ugbkxz.jpg",
    website: "",
    createdAt: "2022-01-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "4dr866vff",
    firstName: "Earth",
    lastName: "",
    username: "earth",
    password: "earth",
    bio: "Duniya",
    bookmarks: [],
    profileImg:
      "https://res.cloudinary.com/kumarravi/image/upload/v1654615590/social-media/earth_yk8kzg",
    website: "",
    createdAt: "2022-01-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
