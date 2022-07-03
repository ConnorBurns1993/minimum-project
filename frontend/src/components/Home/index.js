import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDemoUser = () => {
    dispatch(sessionActions.demoUser()).then(() => history.push("/articles"));
  };

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
    </div>
  );
};

export default Home;
