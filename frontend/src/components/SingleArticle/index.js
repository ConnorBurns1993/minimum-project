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
  const [showComments, setShowComments] = useState(false);
  const [showCommentsText, setShowCommentsText] = useState("Show Comments");

  useEffect(() => {
    dispatch(loadOneArticle(articleId));
  }, [dispatch, articleId]);

  return (
    <div>
      {article && (
        <div>
          <div className="single-article-wrapper">
            <h2 className="single-article-h2">{article?.title}</h2>
            <p className="single-article-p">{article?.body}</p>
            <p className="author">By {article?.User?.name}</p>
            <p className="gray-line2">
              __________________________________________________________________
            </p>
          </div>
          {sessionUser?.id === article?.userId && (
            <div className="edit-delete-articles">
              <NavLink to={`/articles/${article?.id}/edit`} exact>
                <button className="fas fa-solid fa-pen article-edit"></button>
              </NavLink>
              <button
                className="fas fa-solid fa-trash article-delete"
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
      {comments && (
        <CommentsByArticle
          showComments={showComments}
          setShowComments={setShowComments}
          showCommentsText={showCommentsText}
          setShowCommentsText={setShowCommentsText}
          sessionUser={sessionUser}
        />
      )}
      <AddCommentForm showComments={showComments} articleId={articleId} />
    </div>
  );
};

export default SingleArticle;
