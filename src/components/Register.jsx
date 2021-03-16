import React from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <form className="register__form">
        <div className="register__name">
          <label htmlFor="name"> Name</label>
          <input type="text" id="name" />
        </div>
        <div className="register__email">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="register__password">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button className="btn register__btn">SignUp</button>
        <p>
          Already have an account?{" "}
          <span>
            <Link className="nav__link" to="/login">
              Login
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
