import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [homePage, setHomePage] = useState("footer-div-home");
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/articles")
      setHomePage("footer-div-articles");
    else {
      setHomePage("footer-div-home");
    }
  });

  return (
    <div className={homePage}>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/connor-burns-647766194/"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        target="_blank"
        href="https://github.com/ConnorBurns1993/minimum-project"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <NavLink to="/about-me">
        <i className="fa-solid fa-address-card"></i>
      </NavLink>
    </div>
  );
};

export default Footer;
