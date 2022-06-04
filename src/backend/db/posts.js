import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "qwerty1234",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "asdfgh1234",
        username: "asdfgh1234",
        text: {
          comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, facere!",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "asdfgh1235",
        username: "asdfgh1234",
        text: {
          comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, facere!",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "asdfgh1236",
        username: "asdfgh1234",
        text: {
          comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, facere!",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "asdfgh1237",
        username: "asdfgh1234",
        text: {
          comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, facere!",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "asdfgh1238",
        username: "asdfgh1234",
        text: {
          comment:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, facere!",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "qwerty1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "zxcvbn1234",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "zxcvbn1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "asdfgh1234",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, consequatur?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "zxcvbn1234",
        username: "zxcvbn1234",
        text: {
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in cupiditate minima?",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "asdfgh1234",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
