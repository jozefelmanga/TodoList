var mongoose = require('mongoose');

// Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

// Create a model using the schema
var Todo = mongoose.model('Todo', todoSchema);

// Export the model
module.exports = Todo;
