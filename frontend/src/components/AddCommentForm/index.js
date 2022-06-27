import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addComment } from "../../store/comment";
import "./AddCommentForm.css";

const AddCommentForm = ({ articleId }) => {
  const { id } = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async () => {
    const newComment = {
      userId: id,
      articleId,
      body,
    };

    dispatch(addComment(newComment)).then(() =>
      history.push(`/articles/${articleId}`).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })
    );
  };

  return (
    <div>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <textarea
        className="textarea-add-comment"
        placeholder="Leave your comment here..."
        value={body}
        onFocus={(e) => (e.target.placeholder = "")}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default AddCommentForm;
