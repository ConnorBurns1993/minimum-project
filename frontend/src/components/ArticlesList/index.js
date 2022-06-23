import { loadArticles } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./ArticlesList.css";

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => {
    return Object.values(state.articles);
  });

  console.log(articles);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <>
      <ul className="">
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <h2 className="article-list-title">{article.title}</h2>
              <p className="article-list-body">{article.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ArticleList;
