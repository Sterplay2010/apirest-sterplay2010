const express = require('express');
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000)
//Middlewares
app.use(express.json());
//Rutas
app.use(require('./routes/juegos'));
//Empezar el servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor en el puerto' , app.get('port'));
})