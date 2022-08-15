import React from "react";
import "./styles.css";

function Login() {
  return (
    <div className="Form">
      <form action="" className="form">
        <h1 className="header">Sign in</h1>
        <label htmlFor="name" className="name">
          Username
        </label>
        <input id="name" type="text" placeholder="Username" />
        <label htmlFor="password" className="password">
          Password
        </label>
        <input id="name" type="text" placeholder="Password" />
        <div className="buttons">
          <button className="button">Sign in</button>
          <p className="orText">OR</p>
          <button className="signUp">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
