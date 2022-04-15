const { Router } = require('express');
const {getTodos,getSingleTodo,newTodo,updateTodo,deleteTodo} = require('../controllers/todoControllers')
const router = Router();



// Obtener eventos
router.get('/', getTodos)

//Obtener un todo
router.get('/:id', getSingleTodo)

//Crear un nuevo evento
router.post('/', 
newTodo)

//Crear un nuevo evento
router.put('/:id', updateTodo)

//Borrar Evento
router.delete('/:id', deleteTodo)


module.exports = router;