import { body, param } from "express-validator";
export const addTodoVAlidator = () => [
  body("title", "Title is required is validator!").notEmpty(),
];
export const EditTodoVAlidator = () => [
  body("title", "Title is required is validator!").notEmpty().isString(),
  param("id", "id is required is validator!").isUUID(),
];
