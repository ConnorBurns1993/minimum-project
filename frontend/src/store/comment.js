import { csrfFetch } from "./csrf";
import { ValidationError } from "../utils/validationError";

const ADD_COMMENT = "comments/ADD_COMMENT";
const LOAD_COMMENTS = "comments/LOAD_COMMENTS";
const UPDATE_COMMENT = "comments/UPDATE_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";

const add = (comment) => {
  return {
    type: ADD_COMMENT,
    comment,
  };
};

const load = (comments) => {
  return {
    type: LOAD_COMMENTS,
    comments,
  };
};

const update = (comment) => {
  return {
    type: UPDATE_COMMENT,
    comment,
  };
};

const destroy = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
};

export const loadComments = (articleId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${articleId}`);

  if (response.ok) {
    const comments = await response.json();
    dispatch(load(comments));
  }
};

export const addComment = (newComment) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });

    if (!response.ok) {
      let errors;
      if (response.status === 422) {
        errors = await response.json();
        throw new ValidationError(errors.errors, response.statusText);
      } else {
        let errorsJSON;
        errors = await response.text();
        try {
          errorsJSON = JSON.parse(errors);
        } catch {
          throw new Error(errors);
        }
        throw new Error(`${errorsJSON.title}: ${errorsJSON.message}`);
      }
    }
    const comment = await response.json();
    dispatch(add(comment));
    return comment;
  } catch (errors) {
    throw errors;
  }
};

export const updateComment = (comment) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${comment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(update(comment));
  }
};

export const destroyComment = (commentId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    const { id } = await response.json();
    dispatch(destroy(id));
    return commentId;
  }
};

const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      const normalComments = {};
      action.comments.forEach((comment) => {
        normalComments[comment.id] = comment;
      });
      return normalComments;

    case ADD_COMMENT:
      if (!state[action.comment.id]) {
        const normalAddComment = {
          ...state,
          [action.comment.id]: action.comment,
        };
        const commentList = Object.values(normalAddComment).map(
          (id) => normalAddComment[id]
        );
        commentList.push(action.comment);
        return normalAddComment;
      }

      break;

    case DELETE_COMMENT:
      const deletedCommentState = { ...state };
      delete deletedCommentState[action.commentId];
      return deletedCommentState;

    case UPDATE_COMMENT:
      const updatedCommentState = {
        ...state,
        [action.comment.id]: action.comment,
      };
      return updatedCommentState;

    default:
      return state;
  }
};

export default commentReducer;
