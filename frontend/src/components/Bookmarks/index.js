import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Bookmarks.css";
import { addBookmark } from "../../store/bookmarks";
import { destroyBookmark } from "../../store/bookmarks";
import { getBookmark } from "../../store/bookmarks";

const Bookmarks = ({ articleId }) => {
  let sessionUser = useSelector((state) => state.session.user);
  let userId;
  if (sessionUser) {
    userId = sessionUser.id;
  }

  const dispatch = useDispatch();
  const [marked, setMarked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const getBookmarks = async () => {
      const bookmarks = await dispatch(getBookmark(articleId));
      const thisUser = bookmarks.find((bookmark) => bookmark.userId === userId);
      thisUser ? setMarked(true) : setMarked(false);
    };
    getBookmarks();
  }, [dispatch, articleId, userId]);

  const handleMark = async () => {
    if (marked) {
      const bookmark = { articleId, userId };
      dispatch(destroyBookmark(bookmark));
    } else {
      setTimeout(() => {
        setOpacity(0);
        setBookmarked(true);
      }, 500);
      clearTimeout();

      const bookmark = { articleId, userId };
      dispatch(addBookmark(bookmark));
    }
    setOpacity(1);
    setMarked(!marked);
  };
  return (
    <div className="bookmark-div">
      {sessionUser && (
        <i
          onClick={() => handleMark()}
          className={
            !marked ? "fa-regular fa-bookmark" : "fa-solid fa-bookmark"
          }
        ></i>
      )}
      {marked && (
        <p
          style={{ opacity: opacity }}
          className={opacity ? "fade-in" : "fade-out"}
        >
          Bookmarked!
        </p>
      )}
    </div>
  );
};

export default Bookmarks;
