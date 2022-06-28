import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation2.css";

function Navigation2({ isLoaded }) {
  //   const sessionUser = useSelector((state) => state.session.user);
  //   const history = useHistory();

  //   let sessionLinks;
  //   if (sessionUser) {
  //     sessionLinks = <ProfileButton user={sessionUser} />;
  //   } else {
  //     sessionLinks = (
  //       <>
  //         <LoginFormModal />
  //         <SignupFormModal />
  //       </>
  //     );
  //   }

  //   const handleClick = () => {
  //     if (sessionUser) {
  //       history.push("/articles");
  //     } else {
  //       history.push("/");
  //     }
  //   };

  return <h2>NAV 2 BABY!</h2>;
}

export default Navigation2;
