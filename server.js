const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// -------------------------------- DATABASE -------------------------------- //

const db = require('./models');


// -------------------------------- MIDDLEWARE -------------------------------- //

app.use(bodyParser.json());

// -------------------------------- ROUTES -------------------------------- //

// GET ROOT Route
app.get('/', (req, res) => {
    res.send('<h1>Mongoose Intro</h1>');
});

// GET API INDEX Todos Route
app.get('/api/todos', (req, res) => {
    db.Todo.find({}, (err, allTodos) => {
    if (err) return res.json({error: err});
    res.json({data: allTodos});
    });
});


// GET API SHOW Todos Route
app.get('/api/todos/:id', (req,res)=>{
    db.Todo.findById(req,params.id,(err,foundTodo) => {
        if(err) return res.json(err);
        res.json(savedTodo);
    });
});

// POST API CREATE Todos Route
app.post('/api/todos', (req, res) => {
    const newTodo = req.body;
    console.log(newTodo);
    db.Todo.create(newTodo, (err,savedTodo)=>{
        if (err) return res.json(err);
        res.json(savedTodo);
    });
});

// ------------------------------ START SERVER ------------------------------ //

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));