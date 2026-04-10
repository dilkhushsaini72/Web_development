const express = require("express");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "dilkhush",
    content: "This is a content of the dilkhush",
  },
  {
    id: uuidv4(),
    username: "krishna",
    content: "This is a content of the krishna",
  },
  {
    id: uuidv4(),
    username: "rahul kumar",
    content: "This is a content of the rahul kumar",
  },
];

app.get("/", (req, res) => {
  res.send("server working fine!");
});
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  const id = uuidv4();
  posts.push({
    id,
    username,
    content,
  });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => id == p.id);
  res.render("show.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => id == p.id);
  res.render("edit.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const newContent = req.body.content;
  const post = posts.find((p) => id == p.id);
  post.content = newContent;
  res.redirect("/posts");
});

app.delete("/posts/:id", (req,res) => {
  const {id} = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
