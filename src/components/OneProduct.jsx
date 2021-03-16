import React, { useRef } from "react";
import "../styles/OneProduct.css";

function OneProduct({ product }) {
  const numRef = useRef(null);

  const btnIncrease = function () {
    let value = Number(numRef.current.innerHTML);
    value++;
    numRef.current.innerHTML = value;
  };

  const btnDecrease = function () {
    let value = Number(numRef.current.innerHTML);
    value--;
    if (value < 0) return;
    numRef.current.innerHTML = value;
  };

  const addToCartHandler = function () {
    const cartPrize = product.price * Number(numRef.current.innerHTML);

    console.log(cartPrize);
  };

  return (
    <div className="oneProduct">
      <div className="oneProduct__container">
        <img src={product?.image} alt="Product" />
        <div className="oneProduct__info">
          <h2>{product?.title}</h2>
          <p>{"".padStart(product?.rating, "⭐")}</p>
          <small>$</small>
          <strong>{product?.price}</strong>
          <div className="oneProduct__addToCart">
            <button className=" btn__cart" onClick={btnDecrease}>
              -
            </button>
            <p ref={numRef}>0</p>
            <button className=" btn__cart" onClick={btnIncrease}>
              +
            </button>
          </div>
          <button className="btn btn-addToCart" onClick={addToCartHandler}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
