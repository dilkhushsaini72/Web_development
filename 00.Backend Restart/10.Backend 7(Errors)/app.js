const express = require("express");
const expressError = require("./expressError.js");
const app = express();
const PORT = 8080;

const checkToken = (req, res, next) => {
  const { token } = req.query;
  if (token == "giveaccess") {
    next();
  }
  throw new expressError(401, "access denied!");
};

app.get("/random", checkToken, (req, res) => {
  res.send("Hello, from random..");
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.use("/", (err, req, res, next) => {
  const { status, message } = err;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log("server started..");
});
