const router = require('express').Router();
const todoController = require('../controllers/todoController');

router.get('/:userId', todoController.getTodos);
router.post('/:userId', todoController.addTodo);
router.delete('/:id', todoController.deleteTodo);
router.put('/:id', todoController.updateTodo);

module.exports = router;
