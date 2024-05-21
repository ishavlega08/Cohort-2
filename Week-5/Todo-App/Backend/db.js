const mongoose = require("mongoose");
// mongodb url handy
// mongodb+srv://admin:Ishav%402002@cohort-2.sa2qatc.mongodb.net/todos
// .env

mongoose.connect("mongodb id")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}
