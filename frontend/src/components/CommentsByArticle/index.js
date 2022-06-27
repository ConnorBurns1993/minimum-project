import { loadComments } from "../../store/comment";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CommentsByArticle.css";
import SingleComment from "../SingleComment";

const CommentsByArticle = ({ sessionUser }) => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const comments = useSelector((state) => {
    return Object.values(state.comments);
  });

  useEffect(() => {
    dispatch(loadComments(articleId));
  }, [dispatch, articleId]);

  return (
    <>
      <ul className="">
        {comments
          .sort()
          .reverse()
          .map((comment) => {
            return (
              <SingleComment
                comment={comment}
                articleId={articleId}
                sessionUser={sessionUser}
              />
            );
          })}
      </ul>
    </>
  );
};

export default CommentsByArticle;
