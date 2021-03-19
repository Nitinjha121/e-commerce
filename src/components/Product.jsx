import React from "react";
import "../styles/Product.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import { Link } from "react-router-dom";

function Product({ id, title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__cart">
        <Link className="nav__link" to={`/products/${id}`}>
          <ZoomOutMapIcon fontSize="large" className="nav__shoppingCart" />{" "}
        </Link>
        <ShoppingCartIcon fontSize="large" className="nav__shoppingCart" />
      </div>
      <img src={image} alt="Product" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__pricerate">
          <div className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </div>
          <div className="product__rating">
            <p>{"".padStart(rating, "⭐")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
