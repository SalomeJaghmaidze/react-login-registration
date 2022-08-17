import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const [user, setUser] = useState([]);
  let navigate = useNavigate();

  const onSubmit = (data) => {
    if (user.length == 0) {
      setUser((prevUsers) => [...prevUsers, data]);
    } else {
      const items = JSON.parse(localStorage.getItem("user"));
      var exists = false;
      items.forEach((element) => {
        if (element.Email === data.Email) {
          exists = true;
          console.log("already registered");
        }
      });
      if (!exists) {
        console.log("added")
        setUser((prevUsers) => [...prevUsers, data]);
      }
    }

  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    // navigate("/authorized/");
  }, [user]);

  return (
    <div className="Form">
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="header">Register</h1>
        <label htmlFor="name" className="name">
          First Name
        </label>
        <input
          {...register("name", { required: true })}
          placeholder="your first name..."
        />
        <label className="surname">Last Name</label>
        <input
          {...register("last name", { required: true })}
          placeholder="your last name..."
        />
        <label className="name">Email</label>
        <input
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="your email..."
        />
        {errors.Email && <p className="error">Email must contain '@'</p>}
        <label className="password">Password</label>
        <input
          {...register("Password", { required: true })}
          placeholder="password"
        />
        <label className="password">Confirm Password</label>
        <input
          {...register("ConfirmedPassword", {
            required: true,
            validate: (val: string) => {
              if (watch("Password") != val) {
                return "Your passwords do no match";
              }
            },
          })}
          placeholder="confirm password"
        />
        {errors.ConfirmedPassword && (
          <p className="error">Your passwords do no match</p>
        )}

        <button className="register">Register</button>
      </form>
    </div>
  );
}

export default Register;
