var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// All actual paths start with "/todos"

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /todos
router.post('/', skillsCtrl.create);  
// DELETE /todos
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
