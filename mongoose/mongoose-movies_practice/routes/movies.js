var express = require('express');
var router = express.Router();
const moviesCtrl = require("../controllers/movies")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/new', moviesCtrl.new )


router.get('/', moviesCtrl.index )

router.post('/', moviesCtrl.create);

module.exports = router;
