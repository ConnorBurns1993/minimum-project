import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);
  const [profileClass, setProfileClass] = useState("profile-button");
  const [iconClass, setIconClass] = useState("fa-regular fa-user");

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    setProfileClass("profile-button-solid");
    setIconClass("fa-solid fa-user");
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
      setProfileClass("profile-button");
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

  return (
    <>
      <button className={profileClass} onClick={openMenu}>
        <i className={iconClass} />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="dropdown-name">{user.name}.</li>
          <div className="logout-article-wrapper">
            <NavLink className="write-article" to={`/articles/new`}>
              <i className="fa-solid fa-pen-to-square write-article"></i>
            </NavLink>
            <li>
              <i
                className="fa-solid fa-right-from-bracket logout"
                alt="logout"
                onClick={logout}
              ></i>
            </li>
          </div>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
