import React from "react";
import { useDispatch } from "react-redux";
import { destroyComment } from "../../store/comment";
import { useHistory } from "react-router-dom";

const DeleteCommentConfirmation = ({ articleId, comment }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(comment);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/articles/${articleId}`);
    return dispatch(destroyComment(comment?.id));
  };

  return (
    <>
      <p>
        Are you sure you want to delete your comment? This action is
        irreversible.
      </p>
      <button onClick={handleSubmit}>Delete</button>
    </>
  );
};

export default DeleteCommentConfirmation;
