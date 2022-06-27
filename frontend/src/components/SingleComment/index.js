import DeleteCommentConfirmation from "../DeleteCommentModal/DeleteComment";
import EditCommentForm from "../EditCommentForm";
import { Modal } from "../../context/Modal";
import { useState } from "react";

const SingleComment = ({ comment, articleId, sessionUser }) => {
  const [openModal, setOpenModal] = useState(false);
  const [commentForm, setCommentForm] = useState(false);

  return (
    <li key={comment?.id}>
      <p>{comment?.User?.name}</p>
      <p>{comment?.body}</p>
      {sessionUser.id === comment.userId && (
        <button
          className="fas fa-solid fa-pen"
          onClick={() => setCommentForm(true)}
        ></button>
      )}
      {commentForm && (
        <EditCommentForm comment={comment} setCommentForm={setCommentForm} />
      )}
      {sessionUser.id === comment.userId && (
        <button
          className="fas fa-solid fa-trash"
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
  );
};

export default SingleComment;
