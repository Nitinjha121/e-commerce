const mongoose = require("mongoose");
// require("dotenv/config");

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

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports.Product = mongoose.model("Product", productSchema);

module.exports.User = mongoose.model("User", userSchema);
