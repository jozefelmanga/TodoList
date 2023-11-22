const TodoService = require('../services/TodoService');

class TodoController {
  async getTodos(req, res) {
    const result = await TodoService.getTodoList();
    res.json(result);
  }

  async addTodo(req, res) {
    const { item } = req.body;
    const result = await TodoService.addTodo(item);
    res.json(result);
  }

  async deleteTodo(req, res) {
    const { id } = req.params;
    const result = await TodoService.deleteTodo(id);
    res.json(result);
  }

  async updateTodo(req, res) {
    const { id } = req.params;
    const { item } = req.body;
    const result = await TodoService.updateTodo(id, item);
    res.json(result);
  }
}

module.exports = new TodoController();
