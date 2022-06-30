import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
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
      <a target="_blank" href="mailto:cburns1993@gmail.com">
        <i className="fa-solid fa-at"></i>
      </a>
    </div>
  );
};

export default Footer;
