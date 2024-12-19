const express = require("express");
const { v4 } = require("uuid");
const cors = require("cors");
const server = express();
server.use(cors({ credentials: true, origin: "*" }));
server.use(express.json());
let todo = [
  {
    id: v4(),
    title: "lorem 1",
  },
  {
    id: v4(),
    title: "lorem 2",
  },
  {
    id: v4(),
    title: "lorem 3",
  },
  {
    id: v4(),
    title: "lorem 4",
  },
];
server.get("/todo/get-all", (req, res) => {
  res.status(200).json({ success: true, todo });
});

server.post("/todo/add", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(422).json({ success: false, msg: "Title is required" });
  }
  todo.push({ id: v4(), title });
  res.status(201).json({ success: true, msg: "successfully added" });
});
server.delete("/todo/delete/:id", (req, res) => {
  const { id } = req.params;
  res.status(201).json({ success: true, msg: "successfully deleted" });
  console.log(id);
  const new_todo = todo.filter((val) => val.id !== id);
  todo = new_todo;
});
server.put("/todo/edit/:id", (req, res) => {
  const { id } = req.params;

  if (!title) {
    return res
      .status(422)
      .json({ success: false, msg: "new title is required" });
  }
  const { title } = req.body;
  const todoIndex = todo.findIndex((val) => val.id === id);
  todo.splice(todoIndex, 1, { id, title });
  res.status(201).json({ success: true, msg: "successfully edited" });
});

server.listen(8080, () => {
  console.log("server running");
});
