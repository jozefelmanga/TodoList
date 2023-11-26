var mongoose = require('mongoose');
const UserModel = require("./UserModel");
const { Schema } = mongoose;
// Create a schema - this is like a blueprint
const toDoSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    item: {
        type: String,
        required: true
    }
},{timestamps:true});

// Create a model using the schema
var Todo = mongoose.model('Todo', toDoSchema);

// Export the model
module.exports = Todo;
