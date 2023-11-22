const Todo = require("../models/TodoModel");
const ResponseModel = require("../models/ResponseModel");

class TodoService {
  static async addTodo(item) {
    return TodoService.handleOperation(async () => {
      const newTodo = new Todo({ item });
      const savedTodo = await newTodo.save();
      return TodoService.createSuccessResponse(
        "Todo added successfully",
        savedTodo
      );
    });
  }

  static async deleteTodo(itemId) {
    return TodoService.handleOperation(async () => {
      const deletedTodo = await Todo.findByIdAndDelete(itemId);
      if (!deletedTodo) {
        return TodoService.createNotFoundResponse("Todo not found");
      }
      return TodoService.createSuccessResponse(
        "Todo deleted successfully",
        deletedTodo
      );
    });
  }

  static async updateTodo(itemId, newItem) {
    return TodoService.handleOperation(async () => {
      const updatedTodo = await Todo.findByIdAndUpdate(
        itemId,
        { item: newItem },
        { new: true }
      );
      if (!updatedTodo) {
        return TodoService.createNotFoundResponse("Todo not found");
      }
      return TodoService.createSuccessResponse(
        "Todo updated successfully",
        updatedTodo
      );
    });
  }

  static async getTodoList() {
    return TodoService.handleOperation(async () => {
      const todoList = await Todo.find();
      return TodoService.createSuccessResponse(
        "Todo list retrieved successfully",
        todoList
      );
    });
  }

  static createSuccessResponse(message, data) {
    return new ResponseModel(true, message, data, null);
  }

  static createNotFoundResponse(message) {
    return new ResponseModel(false, message, null, null);
  }

  static createErrorResponse(message, error) {
    return new ResponseModel(false, message, null, error);
  }

  static async handleOperation(operation) {
    try {
      return await operation();
    } catch (error) {
      console.error("Error performing todo operation:", error);
      return TodoService.createErrorResponse("Operation failed", error.message);
    }
  }
}

module.exports = TodoService;
