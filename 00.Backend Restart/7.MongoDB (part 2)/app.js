const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Amazon");
    console.log("MongoDB connected::");
  } catch (error) {
    console.log(error);
  }
};

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: [99, "Price should be at least 99"],
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const Books = mongoose.model("Books", bookSchema);

main().then(() => {
  Books.create({
    title: "Mathematics XII",
    price: 199,
  }).then((data) => console.log(data));
});
