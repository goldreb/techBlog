const { Comment } = require("../models");

//comments seeds for the database
const commentdata = [
  {
    comment_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    user_id: 1,
    post_id: 1,
  },

  {
    comment_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    user_id: 2,
    post_id: 2,
  },

  {
    comment_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    user_id: 3,
    post_id: 3,
  },

  {
    comment_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    user_id: 4,
    post_id: 4,
  },
];

const commentSeeds = () => Comment.bulkCreate(commentdata);

module.exports = commentSeeds;
