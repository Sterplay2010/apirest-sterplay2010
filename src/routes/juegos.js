const express = require('express');
const router = express.Router();

const mysqlConexion = require('../database');

router.get('/consultarJuegos', (req, res) => {
    mysqlConexion.query('SELECT * FROM juegos', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/juegoId/:titulo', (req, res) => {
    const { titulo } = req.params;
    mysqlConexion.query('SELECT * FROM juegos WHERE titulo=?', [titulo], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.post('/importar', (req, res) => {
    const { titulo, descripcion, link, imagen } = req.body;
    const query = `
    INSERT INTO juegos (titulo,descripcion,link,imagen) VALUES (?,?,?,?);
    `;
    mysqlConexion.query(query, [titulo, descripcion, link,imagen], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Juego importado correctamente' });
        } else {
            console.log(err);
        }
    });
});

router.put('/actualizar/:id', (req, res) => {
    const { titulo, descripcion } = req.body;
    const { id } = req.params;
    const query = 'UPDATE juegos SET titulo=?, descripcion=? WHERE id=?';
    mysqlConexion.query(query, [titulo, descripcion, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Juego Actualizado' });
        } else {
            console.log(err);
        }
    });
});

router.delete('/eliminar/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM juegos where id=?';
    mysqlConexion.query(query,[id],(err,rows,fields)=>{
        if (!err){
            res.json({ Status: 'Juego Eliminado correctamente' });
        }else{
            console.log(err);
        }
    });
});
module.exports = router;

