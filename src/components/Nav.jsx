import React, { useState } from "react";
import "../styles/Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "react-router-dom";

function Nav() {
  const [navMenu, setNavMenu] = useState(false);

  const clickHandler = () => {
    setNavMenu(!navMenu);
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link className="nav__link" to="/">
          ShopHub
        </Link>
      </div>
      <div className={`nav__container  ${navMenu ? "" : "short-hidden"}`}>
        <div className="nav__option">
          <ul>
            <li>
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav__link" to="/cart">
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
          <Link className="nav__link" to="/register">
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
