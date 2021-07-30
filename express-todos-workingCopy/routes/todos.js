var express = require("express");
var router = express.Router();
const todoCtrl = require("../controllers/todos");

/* GET users listing. */
//place routes with variables (:id) come last. otherwise 'new' will be taken as an id
router.get("/", todoCtrl.index);
router.get("/new", todoCtrl.new); // new blank
router.get("/edit/:id", todoCtrl.edit); // edit page
router.get("/:id", todoCtrl.show); // detail
router.delete("/:id", todoCtrl.delete);
router.post("/", todoCtrl.create); // create entry user's values at submit button press
router.put("/:id", todoCtrl.update); // update

module.exports = router;
