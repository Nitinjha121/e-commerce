import React, { useState } from "react";
import "../styles/Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [navMenu, setNavMenu] = useState(false);

  const { pathname } = useLocation();

  const clickHandler = () => {
    setNavMenu(!navMenu);
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link className="nav__link" to="/">
          ShopNow
        </Link>
      </div>
      <div className={`nav__container  ${navMenu ? "" : "short-hidden"}`}>
        <div className="nav__option">
          <ul>
            <li>
              <Link
                className="nav__link"
                style={{ color: pathname === "/" ? "#ff9447" : "#000" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav__link"
                style={{ color: pathname === "/cart" ? "#ff9447" : "#000" }}
                to="/cart"
              >
                <ShoppingCartIcon
                  fontSize="large"
                  className="nav__shoppingCart"
                />
              </Link>
            </li>

            <li>Contact</li>
          </ul>
        </div>
        <div className="nav__account">
          <Link
            className="nav__link"
            style={{ color: pathname === "/register" ? "#ff9447" : "#000" }}
            to="/register"
          >
            SignUp
          </Link>
        </div>
      </div>
      <div className="cart-hidden" onClick={clickHandler}>
        {navMenu ? (
          <ClearIcon className="cart-hidden" />
        ) : (
          <MenuIcon className="cart-hidden" />
        )}
      </div>
    </nav>
  );
}

export default Nav;
