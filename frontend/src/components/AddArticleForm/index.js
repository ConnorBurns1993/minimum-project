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
    <>
      {sessionUser && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            placeholder="Write your article here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></input>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </form>
      )}
    </>
  );
};

export default AddArticleForm;
