const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("This is simple get request response on root path");
});

app.get("/apple", (req, res) => {
  res.send("this is apple path");
});

app.get("/banana", (req, res) => {
  res.send("banana path");
});

app.post("/", (req, res) => {
  res.send("This is post request response on root path..");
});

app.get("/search", (req, res) => {
  const { q, color } = req.query;
  console.log(q, color);
  res.send(`q = ${q} color = ${color}`);
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
