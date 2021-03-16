import React, { useState, useEffect } from "react";
import "../styles/Container.css";
import Nav from "./Nav";
import Home from "./Home";
import { Switch, Route, useHistory } from "react-router-dom";
import Shop from "./Shop";
import Register from "./Register";
import Login from "./Login";
import OneProduct from "./OneProduct.jsx";

function Container() {
  const history = useHistory();

  const [idContainer, setIdContainer] = useState("");

  useEffect(() => {
    return history.listen((location) => {
      setIdContainer(location.pathname.slice(10));
    });
  }, [history]);

  if (window.location.pathname !== "/")
    if (!idContainer) setIdContainer(window.location.pathname.slice(10));

  console.log(window.location);

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/");
      const data = await res.json();
      setApiData(data);
    })();
  }, []);

  const product = apiData.find((data) => data._id === idContainer);

  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home apiData={apiData} />
        </Route>
        <Route path="/cart">
          <Shop />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path={`/products/${idContainer}`}>
          <OneProduct product={product} />
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
