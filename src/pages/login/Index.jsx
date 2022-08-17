import React from "react";
import { useState } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  function onSubmit(data, e) {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem("user"));
    items.forEach((user) => {
      if (user.Email === data.username && user.Password === data.password) {
        localStorage.setItem("authUser", JSON.stringify(user));
        navigate("/authorized/");
      } else if (user.Email !== data.username) {
        setMessage("You are not registered");
      } else if (user.Password !== data.password) {
        setMessage("Password is incorrect");
      }
    });
  }

  return (
    <div className="Form">
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="header">Sign in</h1>
        <label htmlFor="name" className="name">
          Username
        </label>
        <input
          id="name"
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        <label htmlFor="password" className="password">
          Password
        </label>
        <input
          id="name"
          type="text"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <p>{message}</p>
        <div className="buttons">
          <button className="button">Sign in</button>
          <p className="orText">OR</p>
          <Link to="/Register">
            <button className="signUp">Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
