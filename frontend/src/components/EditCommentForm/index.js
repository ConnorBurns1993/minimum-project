import { updateComment } from "../../store/comment";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./EditCommentForm.css";

const EditCommentForm = ({ setCommentForm, comment }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { articleId } = useParams();

  const sessionUser = useSelector((state) => state.session.user);

  const [body, setBody] = useState(comment.body);
  const [errors, setErrors] = useState([]);

  const updateBody = (e) => setBody(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editComment = {
      ...comment,
      userId: sessionUser.id,
      articleId,
      body,
    };

    dispatch(updateComment(editComment))
      .then(() => history.push(`/articles/${articleId}`))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    setCommentForm(false);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setCommentForm(false);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

        <input
          value={body}
          onChange={updateBody}
          //   onBlur={handleCancelClick}
        ></input>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        <button onClick={handleCancelClick}>Cancel</button>
      </form>
    </>
  );
};

export default EditCommentForm;
