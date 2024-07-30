import Todo from "../models/todo.model.js"

const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        return res.status(201).json(todo)
    } catch (error) {
        console.log("Error in creating Todo: ", error)
    }
}


export default createTodo