import { csrfFetch } from "./csrf";

const LOAD_ARTICLES = "articles/LOAD_ARTICLES";

const load = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};

export const loadArticles = () => async (dispatch) => {
  const response = await csrfFetch(`/api/articles`);
  console.log("You are in load response");

  if (response.ok) {
    console.log("Respone was ok!");
    const articles = await response.json();
    dispatch(load(articles));
  }
};

const initialState = {};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      console.log("You are in the reducer");
      const normalArticles = {};
      action.articles.forEach((article) => {
        normalArticles[article.id] = article;
      });
      return normalArticles;
    default:
      return state;
  }
};

export default articleReducer;
