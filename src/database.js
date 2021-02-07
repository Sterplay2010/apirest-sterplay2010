const mysql = require('mysql');
const mysqlConexion = mysql.createConnection({
    host:'sterplay2010.c8ci8yxz90hw.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'Skrillex2010',
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