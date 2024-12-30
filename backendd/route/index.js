const { Router } = require("express");
const TodoRouter = require("./todo/todo.route.js");
const router = Router();

router.use("/todo", TodoRouter);

module.exports = { router };
