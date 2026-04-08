const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/rollDice", (req,res) => {
    const diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs",{diceVal})
})

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
