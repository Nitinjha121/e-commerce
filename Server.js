const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

// Middlewares
app.use(cors());

// Inserting data
const uri = process.env.DB_CONNECTION;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(`you got an error ${err}`));

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  rating: Number,
});

const Product = mongoose.model("Product", productSchema);

app.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.json(err);
  }
});

app.get("/api/products", (req, res) => {});

app.post("/products");

app.listen(4000, () => console.log("listening on port 4000"));
