const Todo = require("../models/todo");

function index(req, res) {
  res.render("todos/index", {
    //these keys get passed to the page to access
    todos: Todo.getAll(),
    time: req.time,
  });
}

function show(req, res) {
  res.render("todos/show", {
    todo: Todo.getOne(req.params.id),
  });
}

// 'new' as a function name is not allowed
function newTodo(req, res) {
  res. render('todos/new')
};

function create(req, res) {
  Todo.create(req.body.todo);
  res.redirect("/todos");
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}
// -----------
function edit(req, res) {
  res.render("todos/edit", {
    todo: Todo.getOne(req.params.id),
  });
}

function update(req, res) {

  // -(item to be updated, new value)
  console.log("req.body",req.body)
  Todo.updateOne(req.params.id, req.body)
  res.redirect('/todos/'+ req.params.id)

}


// --------------------
module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit,
  update,
};
