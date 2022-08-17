import React from "react";
import "./styless.css";
import Logo from "../imgs/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const [logedIn, setlogedIn] = useState(false);

  function signOut() {
    window.localStorage.removeItem("authUser");
    setlogedIn(false);
  }

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    if (authUser) {
      setlogedIn(true);
    }
  }, [logedIn, location.pathname]);

  return (
    <div className="Header">
      <div>
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      {logedIn ? (
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="nav-item" onClick={signOut}>
            Sign out
          </p>
        </Link>
      ) : (
        <div className="nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="nav-item">Sign in</p>
          </Link>
          <Link to="/Register" style={{ textDecoration: "none" }}>
            <p className="nav-item">Register</p>
          </Link>
        </div>
      )}
    </div>
  );
}
