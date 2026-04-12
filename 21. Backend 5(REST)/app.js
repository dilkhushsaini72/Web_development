const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req,res) => {
  res.send("Hello this is get request. ")
})

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
