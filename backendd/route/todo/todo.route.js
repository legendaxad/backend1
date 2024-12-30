const { Router } = require("express");
const TodoRouter = Router();
const { v4 } = require("uuid");
const {
  EditTodo,
  Deletetodo,
  getallTodo,
  addTodo,
} = require("../../controller/todo/get.contorller.js");
const {
  addTodoVAlidator,
  EditTodoVAlidator,
} = require("../../validator/todo/todo.validator.js");
const { validate } = require("../../validator/validator.js");
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
TodoRouter.get("/get-all", getallTodo);

TodoRouter.post("/add", addTodoVAlidator(), validate, addTodo);

TodoRouter.delete("/delete/:id", Deletetodo);
TodoRouter.put("/edit/:id", EditTodoVAlidator(), validate, EditTodo);
module.exports = TodoRouter;
