import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <div className="login__email">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="login__password">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button className="btn login__btn">Log In</button>
      </form>
    </div>
  );
}

export default Login;
