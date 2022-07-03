import { csrfFetch } from "./csrf";
import { ValidationError } from "../utils/validationError";

const ADD_ARTICLE = "articles/ADD_ARTICLE";
const LOAD_ARTICLES = "articles/LOAD_ARTICLES";
const UPDATE_ARTICLE = "articles/UPDATE_ARTICLE";
const DELETE_ARTICLE = "articles/DELETE_ARTICLE";

const add = (article) => {
  return {
    type: ADD_ARTICLE,
    article,
  };
};

const load = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};

const update = (article) => {
  return {
    type: UPDATE_ARTICLE,
    article,
  };
};

const destroy = (articleId) => {
  return {
    type: DELETE_ARTICLE,
    articleId,
  };
};

export const loadArticles = () => async (dispatch) => {
  const response = await csrfFetch(`/api/articles`);

  if (response.ok) {
    const articles = await response.json();
    dispatch(load(articles));
  }
};

export const loadOneArticle = (articleId) => async (dispatch) => {
  const response = await csrfFetch(`/api/articles/${articleId}`);

  if (response.ok) {
    const article = await response.json();
    dispatch(add(article));
  }
};

export const addArticle = (newArticle) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/articles/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
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
    const article = await response.json();
    dispatch(add(article));
    return article;
  } catch (errors) {
    throw errors;
  }
};

export const updateArticle = (article) => async (dispatch) => {
  const response = await csrfFetch(`/api/articles/${article.id}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  });

  if (response.ok) {
    const article = await response.json();
    dispatch(update(article));
  }
};

export const destroyArticle = (articleId) => async (dispatch) => {
  const response = await csrfFetch(`/api/articles/${articleId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    const { id } = await response.json();
    dispatch(destroy(id));
    return articleId;
  }
};

const initialState = {};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      const normalArticles = {};
      action.articles.forEach((article) => {
        normalArticles[article.id] = article;
      });
      return normalArticles;

    case ADD_ARTICLE:
      if (!state[action.article.id]) {
        const normalAddArticle = {
          ...state,
          [action.article.id]: action.article,
        };
        const articleList = Object.values(normalAddArticle).map(
          (id) => normalAddArticle[id]
        );
        articleList.push(action.article);
        return normalAddArticle;
      }

    case DELETE_ARTICLE:
      const deletedArticleState = { ...state };
      delete deletedArticleState[action.articleId];
      return deletedArticleState;

    case UPDATE_ARTICLE:
      const updatedArticleState = {
        ...state,
        [action.article.id]: action.article,
      };
      return updatedArticleState;

    default:
      return state;
  }
};

export default articleReducer;
