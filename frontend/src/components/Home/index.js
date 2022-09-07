import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import "./Home.css";
import { useEffect, useState, useTransition } from "react";
import { loadArticles } from "../../store/article";

const Home = () => {
  const articles = useSelector((state) => {
    return Object.values(state.articles);
  });
  const random = Math.floor(Math.random() * articles.length);
  const dispatch = useDispatch();
  const history = useHistory();
  const [onOff, setOnOff] = useState(false);
  const [article, setArticle] = useState(articles[random]);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  const handleDemoUser = () => {
    dispatch(sessionActions.demoUser()).then(() => history.push("/articles"));
  };

  setTimeout(() => {
    setOnOff(!onOff);
    if (!onOff) {
      setArticle(articles[random]);
    }
  }, 5000);

  return (
    <div className="home-wrapper">
      <h2 className="minimum-h1">Minimum.</h2>
      <p className="minimum-subheader">All content - no fluff.</p>
      <NavLink to="/articles">
        <button className="start-reading">Start reading</button>
      </NavLink>
      <button className="demo-home" onClick={handleDemoUser}>
        Demo
      </button>
      <img
        className="home-page-img"
        src="https://i.gifer.com/embedded/download/U8mr.gif"
      ></img>
      <div className="home-footer"></div>
      <div className="random-article-wrapper">
        <p className="curiosity">Let your curiosity wander...</p>
        <NavLink
          to={`/articles/${article?.id}`}
          className={!onOff ? "disabled-link" : ""}
        >
          <div className={onOff ? "random-article" : "random-article-loading"}>
            <>
              {!onOff && (
                <img
                  className="article-loading"
                  src="https://cdn.dribbble.com/users/924068/screenshots/3757746/dribbble.gif"
                ></img>
              )}
              <p
                style={{ transition: ".5s", opacity: onOff ? 1 : 0 }}
                className="article-list-title random-article-title"
              >
                {article?.title}
              </p>
              <p
                style={{ transition: ".5s", opacity: onOff ? 1 : 0 }}
                className="article-list-body random-article-body"
              >
                {article?.body}
              </p>
            </>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
