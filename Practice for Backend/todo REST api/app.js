const express = require("express");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

let todos = [
  {
    id: uuidv4(),
    task: "printing books",
  },
  {
    id: uuidv4(),
    task: "reading books",
  },
  {
    id: uuidv4(),
    task: "watching books",
  },
];

// routes for todo app...
app.get("/todo", (req, res) => {
  res.render("index.ejs", { todos });
});

app.post("/todo", (req, res) => {
  const { task } = req.body;
  todos.push({
    id: uuidv4(),
    task: task,
  });
  res.redirect("/todo");
});

app.get("/todo/:id/edit", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => id == t.id);
  res.render("edit.ejs", { todo });
});

app.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const editedTask = req.body.task;
  const todo = todos.find((t) => id == t.id);
  todo.task = editedTask;
  res.redirect("/todo");
});

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((t) => id != t.id);
  res.redirect("/todo");
});

app.listen(PORT, () => {
  console.log("server started..");
});
