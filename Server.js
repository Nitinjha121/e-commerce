const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { Product } = require("./database");
const { User } = require("./database");
const bcrypt = require("bcrypt");
const passport = require("passport");
// const initializePassport = require("./passport-config");
const flash = require("express-flash");
// const session = require("express-session");
require("dotenv/config");

const port = process.env.PORT || 4000;

// initializePassport(
//   passport,
//   async (email) => await User.find({ email: email }).exec(),
//   async (id) => await User.findById(id).exec()
// );

// Middlewares

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET_KEY,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(passport.initialize());
app.use(passport.session());

// Inserting data

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post(
  "user/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.post("/user/register", async (req, res) => {
  try {
    const userFind = await User.find();

    userFind.map((user) => {
      if (user.email === req.body.email) {
        res.json("Error");
        throw new Error("User already registered");
      }
    });

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    user.save();

    res.json("User Registerd");
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.json(err);
  }
});

// app.get("/api/products", (req, res) => {});
app.get("/products/:id", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.post("/products");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => console.log("listening on port 4000"));
