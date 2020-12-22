const express = require('express');
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 2000)
//Middlewares
app.use(express.json());
// Add headers
app.use(function (req, res, next) {
    // Sitio web al que desea permitir que se conecte
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Solicite los métodos que desea permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Solicita los encabezados que deseas permitir
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //Establézcalo en verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas
    //a la API (por ejemplo, en caso de que use sesiones)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pasar a la siguiente capa de middleware
    next();
});
//Rutas
app.use(require('./routes/juegos'));
//Empezar el servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor en el puerto' , app.get('port'));
})