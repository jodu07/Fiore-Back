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


// get un jugador
ruta.get('/:name',(req, res)=>{
    const {name} = req.params
    let sql ='select * from player where name = ?'
    conexion.query(sql,[name],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


ruta.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from player where idPlayer = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})




module.exports = ruta  