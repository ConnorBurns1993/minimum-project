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
          body: "Aut mollitia sapiente vel dolores accusantium et delectus fuga et fugit illo est dolor omnis?",
        },
        {
          userId: 3,
          articleId: 1,
          body: "Ut vitae eveniet ut ullam perferendis quo exercitationem accusamus et excepturi dolores et tenetur exercitationem et sint natus. Vel similique quod in suscipit et dolor similique cum dolor dolor id voluptatem harum sit inventore consequuntur.",
        },
        {
          userId: 1,
          articleId: 2,
          body: "Nam nobis soluta qui natus expedita et illum enim quo corporis sunt.",
        },
        {
          userId: 3,
          articleId: 2,
          body: "Et eaque quod aut vero libero sit quia maxime ut autem obcaecati!",
        },
        {
          userId: 1,
          articleId: 3,
          body: "Et fuga voluptatem sed omnis magnam cum perspiciatis natus 33 voluptatem accusantium ut omnis quod!",
        },
        {
          userId: 2,
          articleId: 3,
          body: "Eos soluta consectetur ut itaque maiores quo adipisci obcaecati? Rem sint laborum nam dolor atque id tenetur tempora a itaque unde. Et neque officiis aut quaerat voluptate sit ipsa dicta.",
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
