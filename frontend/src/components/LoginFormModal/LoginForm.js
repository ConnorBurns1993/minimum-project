import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then((e) => {
        history.push("/articles");
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <form className="log-in-form" onSubmit={handleSubmit}>
      <h2 className="log-in-h2">Log in.</h2>
      <p className="log-in-p">
        By logging in, you agree to our Terms of Service.
      </p>
      <ul>
        {errors.map((error, idx) => (
          <li className="errors-log-in" key={idx}>
            {error}
          </li>
        ))}
      </ul>
      <label className="log-in-inputs">
        Email:
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label className="log-in-inputs">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className="log-in-modal" type="submit">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
