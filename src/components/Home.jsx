import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home({ apiData }) {
  const renderData = function (m, n = 0) {
    if (apiData.length === 1) return apiData;
    return apiData.map((data, i) => {
      if (i >= m || i < n) return;
      return (
        <Product
          key={data._id}
          id={data._id}
          title={data.title}
          price={data.price}
          image={data.image}
          rating={data.rating}
        />
      );
    });
  };

  return (
    <div className="home">
      <div className="home__background"></div>
      <div className="home__container">
        <div className="home__row">{renderData(2)}</div>
        <div className="home__row">{renderData(5, 2)}</div>
        <div className="home__row">{renderData(6, 5)}</div>
      </div>
    </div>
  );
}

export default Home;
