const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    task: String,
    description: String,
    date:{
        type:Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;