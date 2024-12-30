const { v4 } = require("uuid");
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

const getallTodo =
  ("/get-all",
  (req, res) => {
    res.status(200).json({ success: true, todo });
  });
const addTodo = (req, res) => {
  const { title } = req.body;
  // if (!title) {
  //   return res.status(422).json({ success: false, msg: "Title is required" });
  // }
  todo.push({ id: v4(), title });
  res.status(201).json({ success: true, msg: "successfully added" });
};
const Deletetodo =
  ("/delete/:id",
  (req, res) => {
    const { id } = req.params;
    res.status(201).json({ success: true, msg: "successfully deleted" });
    console.log(id);
    const new_todo = todo.filter((val) => val.id !== id);
    todo = new_todo;
  });
const EditTodo =
  ("/edit/:id",
  (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    // if (!title) {
    //   return res.status(422).json({ success: false, msg: "Title is required" });
    // }

    const todoIndex = todo.findIndex((val) => val.id === id);

    todo.splice(todoIndex, 1, { id, title });
    res.status(201).json({ success: true, msg: "successfully edited" });
  });
//   const EditTodo = ("/edit/:id", (req, res) => {
//   const { id } = req.params; // URL'dan ID'ni olish
//   const { title } = req.body; // Body'dan title olish

//   // Agar title bo'lmasa, xatolik qaytarish
//   if (!title) {
//     return res.status(422).json({ success: false, msg: "Title is required" });
//   }

//   // ID bo'yicha todo qidirish
//   const todoIndex = todo.findIndex((val) => val.id === id);

//   // Agar todo topilmasa, xatolik qaytarish
//   if (todoIndex === -1) {
//     return res.status(404).json({ success: false, msg: "Todo not found" });
//   }

//   const currentTodo = todo[todoIndex];

//   // Agar title o'zgartirilmagan bo'lsa
//   if (currentTodo.title === title) {
//     return res
//       .status(400)
//       .json({
//         success: false,
//         msg: "No changes detected. Please provide a new title.",
//       });
//   }

//   // Ma'lumotni yangilash
//   todo.splice(todoIndex, 1, { id, title });

//   // Muvaffaqiyatli javob qaytarish
//   res.status(201).json({ success: true, msg: "Successfully edited" });
// });

module.exports = { getallTodo, addTodo, Deletetodo, EditTodo };
