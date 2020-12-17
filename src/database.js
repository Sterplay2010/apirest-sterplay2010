const mysql = require('mysql');
const mysqlConexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sterplay'
});

mysqlConexion.connect(function (err) {
    if (err){
        console.log(err);
        return;
    }else{
        console.log('La base de datos se conecto exitosamente');
    }
});

module.exports = mysqlConexion;