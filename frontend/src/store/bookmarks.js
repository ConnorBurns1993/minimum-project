import { csrfFetch } from "./csrf";

const GET_BOOKMARKS = "/BOOKMARKS/GET";
const CREATE_BOOKMARK = "/BOOKMARK/CREATE";
const DELETE_BOOKMARK = "/BOOKMARK/DELETE";

const createBookmark = (bookmark) => {
  return {
    type: CREATE_BOOKMARK,
    bookmark,
  };
};

const deleteBookmark = (bookmarkId) => {
  return {
    type: DELETE_BOOKMARK,
    bookmarkId,
  };
};

const getBookmarks = (bookmarks) => {
  return {
    type: GET_BOOKMARKS,
    bookmarks,
  };
};

export const destroyBookmark = (bookmark) => async (dispatch) => {
  const response = await csrfFetch("/api/bookmarks", {
    method: "DELETE",
    body: JSON.stringify(bookmark),
  });
  const deletedId = await response.json();
  dispatch(deleteBookmark(deletedId));
};

export const addBookmark = (bookmark) => async (dispatch) => {
  const response = await csrfFetch("/api/bookmarks", {
    method: "POST",
    body: JSON.stringify(bookmark),
  });
  const newBookmark = await response.json();
  dispatch(createBookmark(newBookmark));
};

export const getBookmark = (articleId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookmarks/${articleId}`);
  const bookmarks = await response.json();
  dispatch(getBookmarks(bookmarks));
  return bookmarks;
};

const bookmarksReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOKMARKS:
      let newState = {};
      action.likes.forEach((bookmark) => (newState[bookmark.id] = bookmark));
      return newState;
    case CREATE_BOOKMARK:
      let newCreateState = { ...state };
      newCreateState[action.bookmark.id] = action.bookmark;
      return newCreateState;
    case DELETE_BOOKMARK:
      let newDeleteState = { ...state };
      delete newDeleteState[action.bookmarkId];
      return newDeleteState;
    default:
      return state;
  }
};

export default bookmarksReducer;
