import { loadComments } from "../../store/comment";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import "./CommentsByArticle.css";
import DeleteCommentConfirmation from "../DeleteCommentModal/DeleteComment";

const CommentsByArticle = () => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const comments = useSelector((state) => {
    return Object.values(state.comments);
  });

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(loadComments(articleId));
  }, [dispatch, articleId]);

  return (
    <>
      <ul className="">
        {comments
          .sort()
          .reverse()
          .map((comment) => {
            return (
              <li key={comment?.id}>
                <p>{comment?.User?.name}</p>
                <p>{comment?.body}</p>
                <button className="fas fa-solid fa-pen"></button>
                <button
                  className="fas fa-solid fa-trash"
                  onClick={() => setOpenModal(true)}
                ></button>
                {openModal && (
                  <Modal onClose={() => setOpenModal(false)}>
                    <DeleteCommentConfirmation
                      articleId={articleId}
                      comment={comment}
                    />
                  </Modal>
                )}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default CommentsByArticle;
