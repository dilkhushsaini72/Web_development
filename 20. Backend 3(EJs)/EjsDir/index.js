const express = require("express");
const app = express();
const path = require("path");

const PORT = 5050;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  let instaData = require("./data.json");
  if (instaData[username]) {
    res.render("insta.ejs", { data: instaData[username] });
  } else {
    res.render("error.ejs");
  }
});
app.get("/rollDice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice.ejs", { diceVal });
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
