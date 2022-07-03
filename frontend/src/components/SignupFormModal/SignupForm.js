import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) history.push("/articles");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, name, password }))
        .then((e) => {
          history.push("/articles");
        })
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="sign-up-h2">Sign up.</h2>
      <p className="sign-up-p">
        By signing up, you agree to our Terms of Service.
      </p>
      <ul className="errors-sign-up-ul">
        {errors.map((error, idx) => (
          <li className="errors-sign-up" key={idx}>
            {error}
          </li>
        ))}
      </ul>
      <div className="sign-up-inputs-wrapper">
        <label className="sign-up-inputs" id="one">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="sign-up-inputs" id="two">
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="sign-up-inputs 3" id="three">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="sign-up-inputs" id="four">
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button className="sign-up-modal" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
