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
    <>
      <p>
        Are you sure you want to delete your article? This action is
        irreversible.
      </p>
      <button onClick={handleSubmit}>Delete</button>
    </>
  );
};

export default DeleteArticleConfirmation;
