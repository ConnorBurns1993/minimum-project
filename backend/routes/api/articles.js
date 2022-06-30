const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Article } = require("../../db/models/article");
const { User } = require("../../db/models/user");
const db = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const articles = await db.Article.findAll({
      include: [{ model: db.User }],
    });
    return res.json(articles);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const article = await db.Article.findByPk(req.params.id, {
      include: [{ model: db.User }],
    });

    return res.json(article);
  })
);

const validateArticle = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Article must have a title.")
    .isLength({ max: 200 })
    .withMessage("Article titles cannot be longer that 200 characters.")
    .isLength({ min: 10 })
    .withMessage("Article titles must be atleast 10 characters long."),
  check("body")
    .exists({ checkFalsy: true })
    .withMessage("Article must have content.")
    .isLength({ min: 10 })
    .withMessage("Article content must be atleast 10 characters long."),

  handleValidationErrors,
];

router.post(
  "/new",
  validateArticle,
  asyncHandler(async (req, res) => {
    const newArticle = await db.Article.create(req.body);
    res.json(newArticle);
  })
);

router.put(
  "/:id/edit",
  validateArticle,
  asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const article = await db.Article.findByPk(req.params.id, {
      include: [{ model: db.User }],
    });

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
    const deleteArticle = await db.Article.findByPk(id);
    await deleteArticle.destroy();
    return res.json({ id });
  })
);

module.exports = router;
