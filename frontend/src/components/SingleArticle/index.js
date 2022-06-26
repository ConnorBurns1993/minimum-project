import { loadOneArticle } from "../../store/article";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteArticleConfirmation from "../DeleteArticleModal/DeleteArticle";
import { NavLink } from "react-router-dom";
import { Modal } from "../../context/Modal";
import "./SingleArticle.css";

const SingleArticle = () => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  // const history = useHistory();

  const article = useSelector((state) => state.articles[articleId]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(loadOneArticle(articleId));
  }, [dispatch, articleId]);

  return (
    <div>
      {article && (
        <div>
          <h2>{article?.title}</h2>
          <p>{article?.body}</p>
          <NavLink to={`/articles/${article?.id}/edit`} exact>
            <button className="fas fa-solid fa-pen-to-square"></button>
          </NavLink>
          <button
            className="fas fa-solid fa-trash"
            onClick={() => setOpenModal(true)}
          ></button>
          {openModal && (
            <Modal onClose={() => setOpenModal(false)}>
              <DeleteArticleConfirmation article={article} />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleArticle;
