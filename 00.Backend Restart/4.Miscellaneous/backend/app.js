const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  console.log(req.query);
  res.send("standard get request");
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.send(`standard post request , Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log("server started");
});
