const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { Product } = require("./database");
const { User } = require("./database");
require("dotenv/config");

const port = process.env.PORT || 4000;

// Middlewares

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Inserting data
app.use(express.static(__dirname + "/build"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.post("/user/register", async (req, res) => {
  try {
    const userFind = await User.find();

    userFind.map((user) => {
      if (user.email === req.body.email) {
        res.json("Error");
        throw new Error("User already registered");
      }
    });

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

app.get("/products/api/products", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.json(err);
  }
});

app.get("/products/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.post("/products");

app.listen(port, () => console.log("listening on port 4000"));
