import { loadComments } from "../../store/comment";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CommentsByArticle.css";
import SingleComment from "../SingleComment";

const CommentsByArticle = ({
  showComments,
  setShowComments,
  showCommentsText,
  setShowCommentsText,
  sessionUser,
}) => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const comments = useSelector((state) => {
    return Object.values(state.comments);
  });

  const handleClick = () => {
    if (!showComments) {
      setShowComments(true);
      setShowCommentsText("Hide Comments");
    } else {
      setShowComments(false);
      setShowCommentsText("Show Comments");
    }
  };

  useEffect(() => {
    dispatch(loadComments(articleId));
  }, [dispatch, articleId]);

  return (
    <>
      <button className="show-comments" onClick={handleClick}>
        {showCommentsText}
      </button>
      {showComments && (
        <ul className="comments-by-article-wrapper">
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
      )}
    </>
  );
};

export default CommentsByArticle;
