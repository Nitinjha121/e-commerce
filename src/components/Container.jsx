import React, { useState, useEffect, useRef } from "react";
import "../styles/Container.css";
import Nav from "./Nav";
import Home from "./Home";
import { Switch, Route, useHistory } from "react-router-dom";
import Shop from "./Shop";
import Register from "./Register";
import Login from "./Login";
import OneProduct from "./OneProduct.jsx";

function Container() {
  // getting product ids

  const history = useHistory();

  const [idContainer, setIdContainer] = useState("");

  useEffect(() => {
    return history.listen((location) => {
      console.log(location.pathname);
      setIdContainer(location.pathname.slice(10));
    });
  }, [history]);

  if (window.location.pathname.includes("products"))
    if (!idContainer) setIdContainer(window.location.pathname.slice(10));

  // fetching all products from database to show on home

  const [apiData, setApiData] = useState([
    <div key="23" className="container__loading">
      <div className="lds-dual-ring"></div>
    </div>,
  ]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/api/products");
      const data = await res.json();
      setApiData(data);
    })();
  }, []);

  // rendering one specific element which click on

  const product = apiData.find((data) => {
    if (data.type === "div") return data;
    return data._id === idContainer;
  });

  // Creating user registration

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const paraRef = useRef(null);
  const nameRef = useRef(null);
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const formSubmit = async function (e) {
    e.preventDefault();

    const refArr = [
      {
        name: name,
        ref: nameRef,
      },
      {
        name: email,
        ref: emailRef,
      },
      {
        name: password,
        ref: passwordRef,
      },
      {
        name: userName,
        ref: userRef,
      },
    ];

    if (!name || !userName || !password || !email) {
      return refArr.map(({ name, ref }) => {
        if (!name) {
          ref.current.classList.remove("register__hidden");
        }
        // if(!nam )
      });
    }
    const formData = {
      name: name,
      userName: userName,
      email: email,
      password: password,
    };

    const res = await fetch("http://localhost:4000/user/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data === "Error") {
      paraRef.current.innerHTML = "Your Account Already Exist In Our Database";
      paraRef.current.className = "register__warningMessage";
    } else {
      paraRef.current.innerHTML = "";
      window.location.href = window.location.origin;
    }
  };

  // Register Form Data

  const formSection = [
    {
      id: "name",
      type: "text",
      setHook(target) {
        return setName(target);
      },
      ref: nameRef,
      name: "Name",
    },
    {
      id: "userName",
      type: "text",
      setHook(target) {
        return setUserName(target);
      },
      ref: userRef,
      name: "Username",
    },
    {
      id: "email",
      type: "email",
      setHook(target) {
        return setEmail(target);
      },
      ref: emailRef,
      name: "Email",
    },
    {
      id: "password",
      type: "password",
      setHook(target) {
        return setPassword(target);
      },
      ref: passwordRef,
      name: "Password",
    },
  ];

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
          <Register
            formSubmit={formSubmit}
            paraRef={paraRef}
            formSection={formSection}
          />
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
