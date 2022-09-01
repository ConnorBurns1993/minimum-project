const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const db = require("../../db/models");

router.get(
  "/:articleId",
  asyncHandler(async (req, res) => {
    const { articleId } = req.params;
    const articleBookmarks = await db.Bookmark.findAll({
      where: { articleId },
    });

    res.json(articleBookmarks);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const Bookmark = await db.Bookmark.create(req.body);
    res.json(Bookmark);
  })
);

router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { articleId, userId } = req.body;
    const deleteBookmark = await db.Bookmark.findOne({
      where: { articleId, userId },
    });
    const deleteBookmarkId = deleteBookmark.id;
    await deleteBookmark.destroy();
    res.json(deleteBookmarkId);
  })
);

module.exports = router;
