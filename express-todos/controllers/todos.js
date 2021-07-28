const Todo = require('../models/todo');

function index(req, res) {
    res.render("todos/index",  {
        todos: Todo.getAll(),
    });
}


function show(req,res) {
    res.render("todos/sho", {
        todo: Todo.getTodo()
    });
}
module.exports = {
    index,
    show,
};