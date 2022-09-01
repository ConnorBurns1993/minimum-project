const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const articlesRouter = require("./articles.js");
const commentsRouter = require("./comments.js");
const bookmarksRouter = require("./bookmarks.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/articles", articlesRouter);

router.use("/comments", commentsRouter);

router.use("/bookmarks", bookmarksRouter);

router.get(
  "/set-token-cookie",
  asyncHandler(async (_req, res) => {
    const user = await User.findOne({
      where: {
        name: "John Doe",
      },
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});

router.get("/require-auth", requireAuth, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
