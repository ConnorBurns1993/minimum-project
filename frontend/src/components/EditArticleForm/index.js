import { updateArticle } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./EditArticleForm.css";

const EditArticleForm = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { articleId } = useParams();
  const article = useSelector((state) => state.articles[articleId]);

  const [title, setTitle] = useState(article.title);
  const [body, setBody] = useState(article.body);
  const [errors, setErrors] = useState([]);

  const updateTitle = (e) => setTitle(e.target.value);
  const updateBody = (e) => setBody(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editArticle = {
      ...article,
      userId: sessionUser.id,
      title,
      body,
    };

    dispatch(updateArticle(editArticle))
      .then(() => history.push(`/articles/${articleId}`))
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <input placeholder="Title" value={title} onChange={updateTitle}></input>
        <input
          placeholder="Write your article here..."
          value={body}
          onChange={updateBody}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </form>
    </>
  );
};

export default EditArticleForm;
