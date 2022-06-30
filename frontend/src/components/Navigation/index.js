import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
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
    <div className="header-home">
      <ul className="nav-home-ul" style={{ listStyle: "none" }}>
        <li className="nav-home-li">
          <img
            alt=""
            className="home-logo"
            onClick={handleClick}
            src="../images/favicon.svg"
          ></img>
          <div className="nav-buttons-wrapper">{isLoaded && sessionLinks}</div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
