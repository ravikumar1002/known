import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "92e3-41e0-a8d7",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "408c6b2b7e6f",
        username: "mars",
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
        _id: "408c6b2b7e99",
        username: "venus",
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
    username: "mercury",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "584c-47ac-94ef",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jupiter",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "6eda-453d-9e42",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, consequatur?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "672edf1159b1",
        username: "venus",
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
    username: "neptune",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "f851-40a5-886c",
    content: "Lorem ipsum dolor sit amet.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mars",
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: "0df7aaae930f",
        username: "venus",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "8be9f66ac715",
        username: "neptune",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "688c89a0af06",
        username: "uranus",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: "1b24-4c08-b0ca",
    content:
      "Jupiter is a gas giant, being primarily composed of gas and liquid rather than solid matter. It is the largest planet in the Solar System, with a diameter of 142,984 km (88,846 mi) at its equator. The average density of Jupiter, 1.326 g/cm3, is about the same as simple syrup (syrup USP), and is lower than those of the four terrestrial planets.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jupiter",
    comments: [
      {
        _id: "6b34a507ced7",
        username: "saturn",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "7255f4978bce",
        username: "neptune",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "d81a-4bfe-81fe",
    content:
      "Despite its small size and slow 59-day-long rotation, Mercury has a significant, and apparently global, magnetic field. According to measurements taken by Mariner 10, it is about 1.1% the strength of Earth's. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mercury",
    comments: [
      {
        _id: "0eb809577a2d",
        username: "mars",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "37df8acf6aee",
        username: "venus",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T16:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "a8ac-48fa-a9f2",
    content:
      "About 80% of the Venusian surface is covered by smooth, volcanic plains, consisting of 70% plains with wrinkle ridges and 10% smooth or lobate plains. Two highland 'continents' make up the rest of its surface area, one lying in the planet's northern hemisphere and the other just south of the equator.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "venus",
    comments: [],
    createdAt: "2022-02-25T08:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "44ed-4767-abeb",
    content:
      "Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth. It is the smallest planet in the Solar System, with an equatorial radius of 2,439.7 kilometres (1,516.0 mi).Mercury is also smaller—albeit more massive—than the largest natural satellites in the Solar System, Ganymede and Titan. Mercury consists of approximately 70% metallic and 30% silicate material. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mercury",
    comments: [],
    createdAt: "2022-04-23T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e5d8-4614-b6b3",
    content:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "neptune",

    comments: [
      {
        _id: "2a5ed859aee2",
        username: "jupiter",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2020-04-23T15:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1b85-40f7-9354",
    content:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "saturn",
    comments: [],
    createdAt: "2022-04-01T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "60fb-46fd-82d5",
    content:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mercury",
    comments: [],
    createdAt: "2021-04-30T10:08:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e87b-41cb-b5cb",
    content:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "uranus",
    comments: [],
    createdAt: "2022-03-14T20:08:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "6d3a-412f-a0f9",
    content:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mars",
    comments: [
      {
        _id: "c275f1fa79de",
        username: "saturn",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "bcff3df85f2e",
        username: "venus",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "00e79f69e985",
        username: "neptune",
        text: {
          comment: "aaa",
        },
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-05-13T07:55:12+05:30",
    updatedAt: formatDate(),
  },
];
