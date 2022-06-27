const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Comment, User } = require("../../db/models");

const db = require("../../db/models");

const router = express.Router();

const validateComment = [
  check("body")
    .exists({ checkFalsy: true })
    .withMessage("Comments must have content.")
    .isLength({ min: 2 })
    .withMessage("Comments must have atleast 2 characters.")
    .isLength({ max: 300 })
    .withMessage("Comments cannot be longer than 300 characters."),

  handleValidationErrors,
];

router.get(
  "/:articleId",
  asyncHandler(async (req, res) => {
    const comments = await db.Comment.findAll({
      where: { articleId: req.params.articleId },
      include: [{ model: User }],
    });
    return res.json(comments);
  })
);

router.post(
  "/",
  validateComment,
  asyncHandler(async (req, res) => {
    const newComment = await db.Comment.create(req.body);
    res.json(newComment);
  })
);

router.put(
  "/:id",
  validateComment,
  asyncHandler(async (req, res) => {
    const { body } = req.body;
    const comment = await db.Comment.findByPk(req.params.id);

    await comment.update({
      body,
    });

    return res.json(comment);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deleteComment = await db.Comment.findByPk(id);
    await deleteComment.destroy();
    return res.json({ id });
  })
);

module.exports = router;
