import { loadArticles } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ArticlesList.css";

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => {
    return Object.values(state.articles);
  });

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <>
      <div className="article-title-h2">
        <h2 className="article-list-h2">Articles.</h2>
        <p className="article-list-p">Content to spark the mind.</p>
      </div>
      <img
        className="article-list-image"
        src="https://www.kindpng.com/picc/m/354-3541679_minimalist-geometric-shapes-png-transparent-png.png"
      ></img>
      <ul className="">
        {articles
          .sort()
          .reverse()
          .map((article) => {
            return (
              <li className="article-list-li" key={article.id}>
                <NavLink to={`/articles/${article.id}`}>
                  <h2 className="article-list-title">{article?.title}</h2>
                  <p className="article-list-body">{article?.body}</p>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ArticleList;
