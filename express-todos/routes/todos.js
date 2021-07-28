var express = require('express');
var router = express.Router();
const todoCtrl = require("../controllers/todos");
const Todo = require("../models/todo");

/* GET todos listing. */


router.get('/todos', function(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
});

router.get('/', todoCtrl.index);
router.get('/:id', todoCtrl.show);

module.exports = router;
