const router = require('express').Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);
router.post('/', todoController.addTodo);
router.delete('/:id', todoController.deleteTodo);
router.put('/:id', todoController.updateTodo);

module.exports = router;
