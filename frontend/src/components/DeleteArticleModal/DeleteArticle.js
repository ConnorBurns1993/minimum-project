import React from "react";
import { useDispatch } from "react-redux";
import { destroyArticle } from "../../store/article";
import { useHistory } from "react-router-dom";

const DeleteArticleConfirmation = ({ article }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/articles");
    return dispatch(destroyArticle(article?.id));
  };

  return (
    <div className="delete-form">
      <h2 className="delete-h2">Delete?</h2>
      <p className="delete-p">
        Are you sure you want to delete your article? This action is
        irreversible.
      </p>
      <button className="delete-modal" onClick={handleSubmit}>
        Delete
      </button>
    </div>
  );
};

export default DeleteArticleConfirmation;
