import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton2.css";

function ProfileButton2({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);
  const [profileClass, setProfileClass] = useState("profile-button-2");
  const [iconClass, setIconClass] = useState("fa-regular fa-user");

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    setProfileClass("profile-button-solid-2");
    setIconClass("fa-solid fa-user");
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
      setProfileClass("profile-button-2");
      setIconClass("fa-regular fa-user");
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  const redirectHome = (e) => {
    e.preventDefault();
    history.push("/articles");
  };

  return (
    <>
      <div className="nav-buttons-2">
        <i
          className="fa-solid fa-house-chimney home-button-2"
          onClick={redirectHome}
        ></i>
        <p className="gray-line">____</p>
        <NavLink className="write-article-2" to={`/articles/new`}>
          <i className="fa-solid fa-file-pen edit-button-2"></i>
        </NavLink>
        <p className="gray-line">____</p>
        <NavLink to="/articles/bookmarked">
          <i className="fa-solid fa-bookmark edit-button-2 bigger-mark"></i>
        </NavLink>
        <p className="gray-line">____</p>
        {user && (
          <button className={profileClass} onClick={openMenu}>
            <i className="fa-solid fa-user" />
          </button>
        )}
        {showMenu && (
          <ul className="profile-dropdown-2">
            <li className="dropdown-name-2">Logout?</li>
            <div className="logout-article-wrapper">
              <li>
                <button className="articles-logout-button" onClick={logout}>
                  Confirm
                </button>
              </li>
            </div>
          </ul>
        )}
        <div className="right-sidebar-div"></div>
      </div>
    </>
  );
}

export default ProfileButton2;
