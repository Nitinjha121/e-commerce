import React, { useState, useRef, useEffect } from "react";
import "../styles/Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { Link, useHistory } from "react-router-dom";

function Nav() {
  const [navMenu, setNavMenu] = useState(false);
  const homeRef = useRef(null);
  const cartRef = useRef(null);
  const signupRef = useRef(null);
  const navRefArr = [homeRef, cartRef, signupRef];

  const {
    location: { pathname },
  } = useHistory();

  // console.log()

  useEffect(() => {
    console.log(window.location);
  }, [pathname]);

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
              <Link className={`nav__link`} ref={homeRef} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`nav__link ${""}`}
                style={{ color: pathname === "/cart" ? "#ff9447" : "#000" }}
                ref={cartRef}
                to="/cart"
                ref={cartRef}
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
            className={`nav__link `}
            style={{ color: pathname === "/signup" ? "#ff9447" : "#000" }}
            ref={signupRef}
            to="/register"
            ref={signupRef}
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
