import { loadOneArticle } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteArticleConfirmation from "../DeleteArticleModal/DeleteArticle";
import { NavLink } from "react-router-dom";
import { Modal } from "../../context/Modal";
import "./SingleArticle.css";
import CommentsByArticle from "../CommentsByArticle";
import AddCommentForm from "../AddCommentForm";

const SingleArticle = () => {
  const dispatch = useDispatch();
  const { articleId } = useParams();

  const article = useSelector((state) => state.articles[articleId]);
  const comments = useSelector((state) => state.comments);
  const sessionUser = useSelector((state) => state.session.user);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(loadOneArticle(articleId));
  }, [dispatch, articleId]);

  return (
    <div>
      {article && (
        <div>
          <h2>{article?.title}</h2>
          <p>{article?.body}</p>
          {sessionUser.id === article.userId && (
            <div>
              <NavLink to={`/articles/${article?.id}/edit`} exact>
                <button className="fas fa-solid fa-pen"></button>
              </NavLink>
              <button
                className="fas fa-solid fa-trash"
                onClick={() => setOpenModal(true)}
              ></button>
            </div>
          )}
          {openModal && (
            <Modal onClose={() => setOpenModal(false)}>
              <DeleteArticleConfirmation article={article} />
            </Modal>
          )}
        </div>
      )}
      {comments && <CommentsByArticle sessionUser={sessionUser} />}
      <AddCommentForm articleId={articleId} />
    </div>
  );
};

export default SingleArticle;
