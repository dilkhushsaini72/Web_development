const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  res.render("instagram.ejs", { data });
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
