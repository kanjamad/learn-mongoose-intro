const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/todo-sei1';


mongoose.connect(DB_URL,{useNewUrlParser:true})
.then(()=>console.log('MongoDB connected.....'))
.catch((err)=> console.log(err));

const Todo = require('./todo');
module.exports = {
    // Todo : Todo
    Todo,
    
};