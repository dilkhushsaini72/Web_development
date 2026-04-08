const express = require("express");
const app = express();
const PORT = 3030;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(PORT, (req, res) => {
  console.log(`server started on http://localhost:${PORT}/`);
});
