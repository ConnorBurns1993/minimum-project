"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      userId: DataTypes.INTEGER,
      articleId: DataTypes.INTEGER,
      body: DataTypes.TEXT,
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Article, { foreignKey: "articleId" });
  };
  return Comment;
};
