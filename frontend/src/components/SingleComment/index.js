import DeleteCommentConfirmation from "../DeleteCommentModal/DeleteComment";
import EditCommentForm from "../EditCommentForm";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import "./SingleComment.css";

const SingleComment = ({ comment, articleId, sessionUser }) => {
  const [openModal, setOpenModal] = useState(false);
  const [commentForm, setCommentForm] = useState(false);

  return (
    <>
      <li className="comment-li" key={comment?.id}>
        <p className="comment-author">{comment?.User?.name}.</p>
        <p className="comment-body">"{comment?.body}"</p>
        {sessionUser?.id === comment?.userId && !commentForm && (
          <button
            className="fas fa-solid fa-pen comment-edit"
            onClick={() => setCommentForm(true)}
          ></button>
        )}
        {commentForm && (
          <EditCommentForm comment={comment} setCommentForm={setCommentForm} />
        )}
        {sessionUser?.id === comment?.userId && !commentForm && (
          <button
            className="fas fa-solid fa-trash comment-delete"
            onClick={() => setOpenModal(true)}
          ></button>
        )}
        {openModal && (
          <Modal onClose={() => setOpenModal(false)}>
            <DeleteCommentConfirmation
              articleId={articleId}
              comment={comment}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
      </li>
    </>
  );
};

export default SingleComment;
