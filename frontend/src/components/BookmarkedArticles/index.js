import { loadArticles } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./BookmarkedArticles.css";
import { getAllBookmarks } from "../../store/bookmarks";

const BookmarkedArticles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => {
    return Object.values(state.articles);
  });
  const bookmarks = useSelector((state) => {
    return Object.values(state.bookmarks);
  });

  useEffect(() => {
    dispatch(loadArticles());
    dispatch(getAllBookmarks());
  }, [dispatch]);

  let sessionUser = useSelector((state) => state.session.user);
  let userId;
  if (sessionUser) {
    userId = sessionUser.id;
  }

  const marked = bookmarks.filter((bookmark) => {
    return bookmark.userId === sessionUser.id;
  });

  const markedArticles = marked.map((article) => {
    return article.articleId;
  });

  return (
    <>
      <div className="bookmark-title-h2">
        <h2 className="article-list-h2">Bookmarks.</h2>
        <p className="article-list-p">Tailored to your liking.</p>
      </div>
      <img
        className="bookmark-list-image"
        src="https://i.imgur.com/IJGzkIH.png"
      ></img>

      <>
        <ul className="">
          {articles
            .sort()
            .reverse()
            .map((article) => {
              return (
                <li className="article-list-li" key={article.id}>
                  <NavLink to={`/articles/${article.id}`}>
                    {markedArticles.includes(article.id) && (
                      <>
                        <h2 className="article-list-title">{article?.title}</h2>
                        <p className="article-list-body">{article?.body}</p>
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </>
    </>
  );
};

export default BookmarkedArticles;
