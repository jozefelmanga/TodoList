const router = require('express').Router();
const todoController = require('../controllers/todoController');
const { verifyToken } = require("../middlewares/verifyToken");

router.get('/',verifyToken, todoController.getTodos);
router.post('/',verifyToken, todoController.addTodo);
router.delete('/:id',verifyToken, todoController.deleteTodo);
router.put('/:id',verifyToken, todoController.updateTodo);

module.exports = router;
