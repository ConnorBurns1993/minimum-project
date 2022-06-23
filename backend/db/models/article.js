"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
    },
    {}
  );
  Article.associate = function (models) {
    Article.belongsTo(models.User, { foreignKey: "userId" });
    Article.hasMany(models.Comment, { foreignKey: "articleId" });
  };
  return Article;
};
