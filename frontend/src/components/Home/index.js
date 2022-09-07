import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import "./Home.css";
import { useEffect, useState, useTransition } from "react";
import { loadArticles } from "../../store/article";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [onOff, setOnOff] = useState(true);
  const [display, setDisplay] = useState(true);
  const { stage, shouldMount } = useTransition(onOff, 300);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  const articles = useSelector((state) => {
    return Object.values(state.articles);
  });
  const random = Math.floor(Math.random() * articles.length);

  const handleDemoUser = () => {
    dispatch(sessionActions.demoUser()).then(() => history.push("/articles"));
  };

  setTimeout(() => {
    setOnOff(!onOff);
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
        <div className="random-article">
          <>
            <p
              style={{ transition: "1s", opacity: onOff ? 1 : 0 }}
              className="article-list-title random-article-title"
            >
              {articles[random]?.title}
            </p>
            <p
              style={{ transition: "1s", opacity: onOff ? 1 : 0 }}
              className="article-list-body random-article-body"
            >
              {articles[random]?.body}
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
