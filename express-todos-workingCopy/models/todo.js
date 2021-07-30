const todos = [
  { id: 125223, todo: "Feed Dogs", done: true },
  { id: 127904, todo: "Learn Express", done: false },
  { id: 139608, todo: "Buy Milk", done: false },
];


function getAll() {
  return todos;
}

function getOne(id) {
  return todos.find((todo) => todo.id == id);
}

function create(todo) {
  const newTodo = {};
  newTodo.id = Date.now() % 100000;
  newTodo.done = false;
  newTodo.todo = todo;

  todos.push(newTodo);
}

function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = todos.findIndex(todo => todo.id == id);
  // delete item
  todos.splice(idx, 1);
}

function updateOne(id, todo) {
  const idx = todos.find(todo => todo.id == id);
  // replace item
  idx.todo = todo.todo;
  idx.done = todo.done;
}


module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne,
};