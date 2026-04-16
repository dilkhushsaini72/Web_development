const express = require("express");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const PORT = 8080;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("newChat.ejs");
});

app.post("/chats", async (req, res) => {
  const { from, to, msg } = req.body;
  let newChat = new Chat({
    from,
    msg,
    to,
    created_at: new Date(),
  });
  await newChat.save();
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const { msg: newMsg } = req.body;

  const chat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true },
  );
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const deletedChat = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen(PORT, () => {
  console.log("server started..");
});
