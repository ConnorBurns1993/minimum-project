import { addArticle } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddArticleForm.css";

const AddArticleForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      userId: sessionUser.id,
      title,
      body,
    };

    dispatch(addArticle(newArticle))
      .then(() => history.push("/articles"))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div>
      {sessionUser && (
        <form className="add-article-form" onSubmit={(e) => handleSubmit(e)}>
          <ul className="add-article-ul-wrapper">
            {errors.map((error, idx) => (
              <li className="new-article-errors" key={idx}>
                {error}
              </li>
            ))}
          </ul>
          <input
            className="new-article-title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            className="new-article-body"
            placeholder="Write your article here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <div className="new-article-button-wrapper">
            <button className="submit-add-article" onClick={handleSubmit}>
              Submit
            </button>
            <button className="cancel-add-article" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddArticleForm;
