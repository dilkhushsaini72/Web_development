const express = require("express");
const app = express();
const PORT = 8000;
// middleware
const checkToken = (req, res, next) => {
  const { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    res.send("access denied!");
  }
};

app.use("/api", checkToken, (req, res) => {
  res.send("this is your data..");
});

app.listen(PORT, () => {
  console.log("server started..");
});
