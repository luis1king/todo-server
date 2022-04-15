
const {response} = require("express");
const Todo = require("../models/todo");

//Obtener los todos en la base de datos
const getTodos = async(req, res = response) => {
    try{
        const todos = await Todo.find()
        res.status(200).json({
            ok:true,
            todos: todos
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

// Obtener solo un todo por ID
const getSingleTodo = async(req,res=response) =>{
    try{
        id=req.params.id
        const todos = await Todo.findById(id)
        res.status(200).json({
            ok:true,
            todos: todos
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}



//Agregar nuevo todo a la base de datos
const newTodo = async (req, res=response) =>{
    try{
         const todo = new Todo ( req.body )
         const saveTodo = await todo.save()


        res.status(201).json({
            ok:true,
            msg: saveTodo
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

//Modificar todo en la base de datos
const updateTodo = async (req, res=response) =>{
    try{
        //obtenemos el ID
        const todoId = req.params.id;
        //Se crea tarea editada, con nueva info
        const newTodo = {...req.body}     
        //Actualizamos el todo
        const actualizarTodo = await Todo.findByIdAndUpdate(todoId,newTodo, {new:true});
        res.status(201).json({
            ok:true,
            msg: 'Todo actualizado',
            todo: actualizarTodo
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            ok: false,
            msg:'Por favor hable con el administrador'
        })
    }
}


//Borrar todo de la base de datos
const deleteTodo = async (req, res = response) =>{
    try{
        //obtenemos el ID
        const todoId = req.params.id;
        const borrarTodo = await Todo.findByIdAndRemove(todoId)
        res.status(200).json({
            ok: true,
            msg: 'Todo borrado',
            todo: borrarTodo
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            ok: false,
            msg:'Por favor hable con el administrador'
        })
    }
}


module.exports = {newTodo, getTodos, updateTodo, deleteTodo, getSingleTodo};