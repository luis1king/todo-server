const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const {dbConnection} = require('./database/config')


//0BBDD
dbConnection();

//CORS
app.use(cors());

//parseo del body
app.use(express.json());

//directorio publico
app.use(express.static('public'));

//Routes
app.use('/api/todos', require('./routes/todoRoutes'))

//escuchando en el puerto..
app.listen(process.env.PORT, ()=> 
console.log(`server listening on port ${process.env.PORT}`));