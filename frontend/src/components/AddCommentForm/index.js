import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addComment } from "../../store/comment";
import "./AddCommentForm.css";

const AddCommentForm = ({ showComments, articleId }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async () => {
    if (sessionUser) {
      const newComment = {
        userId: sessionUser.id,
        articleId,
        body,
      };

      dispatch(addComment(newComment))
        .then(() => history.push(`/articles/${articleId}`), setErrors([]))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        })
        .then(setBody(""));
    } else {
      setErrors(["You must be logged in to comment!"]);
    }
  };

  if (showComments)
    return (
      <div className="add-a-comment-wrapper">
        <ul className="add-a-comment-ul">
          {errors.map((error, idx) => (
            <li key={idx} className="add-a-comment-errors">
              {error}
            </li>
          ))}
        </ul>
        <p className="add-a-comment-p">Add a Comment:</p>
        <div className="inner-comment-wrapper">
          <textarea
            className="textarea-add-comment"
            placeholder=""
            value={body}
            onFocus={(e) => (e.target.placeholder = "")}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button className="add-comment-submit" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </div>
    );
};

export default AddCommentForm;
