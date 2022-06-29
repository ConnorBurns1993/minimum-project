import React from "react";
import { useDispatch } from "react-redux";
import { destroyComment } from "../../store/comment";
import { useHistory } from "react-router-dom";
import "./DeleteComment.css";

const DeleteCommentConfirmation = ({ articleId, comment, setOpenModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/articles/${articleId}`);
    dispatch(destroyComment(comment?.id));
    return setOpenModal(false);
  };

  return (
    <div className="delete-form">
      <h2 className="delete-h2">Delete?</h2>
      <p className="delete-p">
        Are you sure you want to delete your comment? This action is
        irreversible.
      </p>
      <button className="delete-modal" onClick={handleSubmit}>
        Delete
      </button>
    </div>
  );
};

export default DeleteCommentConfirmation;
