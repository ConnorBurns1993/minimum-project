import { loadArticles } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
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
      <ul className="">
        {articles
          .sort()
          .reverse()
          .map((article) => {
            return (
              <li key={article.id}>
                <h2 className="article-list-title">{article.title}</h2>
                <p className="article-list-body">{article.body}</p>
                <button className="fas fa-solid fa-pen-to-square"></button>
                <button className="fas fa-solid fa-trash"></button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ArticleList;
