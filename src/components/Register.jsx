import React from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";

function Register({ paraRef, formSubmit, formSection }) {
  return (
    <div className="register">
      <form method="post" className="register__form" onSubmit={formSubmit}>
        {formSection.map((obj) => {
          return (
            <div className={`register__${obj.id}`} key={obj.id}>
              <label htmlFor={obj.id}>{obj.name}</label>
              <input
                type={obj.type}
                id={obj.id}
                onChange={(e) => obj.setHook(e.target.value)}
              />
              <p
                ref={obj.ref}
                className="register__hidden register__warningMessage"
              >
                * This field is required
              </p>
            </div>
          );
        })}

        <p ref={paraRef} className="register__message"></p>
        <button className="btn register__btn">SignUp</button>
        <p className="register__login">
          Already have an account?
          <Link className="nav__link" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
