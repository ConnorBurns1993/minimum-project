import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton2 from "./ProfileButton2";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation2.css";

function Navigation2({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const redirectHome = (e) => {
    e.preventDefault();
    history.push("/articles");
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton2 user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="not-logged-in-wrapper-2">
        <i
          className="fa-solid fa-house-chimney home-button-2"
          onClick={redirectHome}
        ></i>
        <div className="not-logged-in-buttons-wrapper">
          <LoginFormModal />
        </div>
        <div className="not-logged-in-buttons-wrapper-2">
          <SignupFormModal />
        </div>
      </div>
    );
  }

  const handleClick = () => {
    if (sessionUser) {
      history.push("/");
    } else {
      history.push("/");
    }
  };

  return (
    <div className="header-home-2">
      <ul className="nav-home-ul-2" style={{ listStyle: "none" }}>
        <li className="nav-home-li-2">
          <img
            alt=""
            className="home-logo-2"
            onClick={handleClick}
            src="./images/favicon.svg"
          ></img>
          <div className="nav-buttons-wrapper-2">
            {isLoaded && sessionLinks}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation2;
