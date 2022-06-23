"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Articles",
      [
        {
          userId: 1,
          title: "Are Semicolons Really That Important in Javascript?",
          body: "I have been going to school for software development and I recently created a project that worked well, but my instructor hounded me for not using semicolons(;) when separating my code. I was a bit confused, since my project worked, do I really need to worry about syntax like this? It seemed a bit excessive to me. Let me know when you think in the comments.",
        },
        {
          userId: 2,
          title: "Jirby Is a War Crime",
          body: "Everyone knows at this point who Jirby is. If you don't, it an image that has been circulating around App Academy that is essentially a fusion of Module 1 instructor Jeff Granof and Kirby. It sounds fun in theory, but this combination has created the monstrosity known as Jirby, and it is absolutely and utterly terrifying. My daughter has been having nightmares for weeks after seeing Jirby and to be honest, I have too. It is not fun or cute, it is a terrifying creature that frankly should be banned from any platform.",
        },
        {
          userId: 3,
          title: "Looking To Learn A New Language? Try Duolingo!",
          body: "Hola! My name is Carlos Santiago and I came to California from Mexico when I was 26. My english was not great and I was looking to improve. A friend introduced me to Duolingo and the lessons were easy to digest and in no time I was speaking English fluently! Each lesson only took me about 5 minutes and I even got to dress up the Duolingo mascot in a nice little bowtie.",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Articles");
  },
};
