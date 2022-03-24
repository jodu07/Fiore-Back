const conexion = require('./config/conexion')
const ruta = require('express').Router()

//get players
ruta.get('/',(req, res)=>{
    let sql ='select * from player'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})



module.exports = ruta  