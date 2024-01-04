var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/sillks');

/* GET users listing. */
// All actual paths start with "/todos"
router.get('/', skillsCtrl.index)

router.get('/:id', skillsCtrl.show);

module.exports = router;
