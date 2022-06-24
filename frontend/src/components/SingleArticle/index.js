import { loadOneArticle } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = () => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  console.log(articleId);
  const history = useHistory();

  const article = useSelector((state) => state.articles[articleId]);

  useEffect(() => {
    dispatch(loadOneArticle(articleId));
  }, [dispatch, articleId]);

  return (
    <div>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};

export default SingleArticle;
