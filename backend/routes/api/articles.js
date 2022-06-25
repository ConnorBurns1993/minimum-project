const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Article } = require("../../db/models/article");
const db = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const articles = await db.Article.findAll({});
    return res.json(articles);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const article = await db.Article.findByPk(req.params.id);
    return res.json(article);
  })
);

router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const newArticle = await db.Article.create(req.body);
    res.json(newArticle);
  })
);

router.put(
  "/:id/edit",
  asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const article = await db.Article.findByPk(req.params.id);

    await article.update({
      title,
      body,
    });

    return res.json(article);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deleteArticle = await Business.findByPk(id);
    await deleteArticle.destroy();
    return res.json({ id });
  })
);

module.exports = router;
