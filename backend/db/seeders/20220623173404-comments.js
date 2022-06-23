"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 2,
          articleId: 1,
          body: "Of course they are! You want your code to be as concise as possible so other developers can easily work off of your code.",
        },
        {
          userId: 3,
          articleId: 1,
          body: "Hey, if it works it works! Let those other developers work on their debugging skills.",
        },
        {
          userId: 1,
          articleId: 2,
          body: "I am just a demo user. I have no formal opinion.",
        },
        {
          userId: 3,
          articleId: 2,
          body: "Oh Dios mío, it is truly terrifying!",
        },
        {
          userId: 1,
          articleId: 3,
          body: "Yes, Duolingo is great. As a demo user, I wonder if I can insert an affiliate link here?",
        },
        {
          userId: 2,
          articleId: 3,
          body: "Way to go Carlos! I should start learning Mandarin...",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Comments");
  },
};
