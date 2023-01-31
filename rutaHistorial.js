const conexion = require('./config/conexion')
const rutaHistorial = require('express').Router()




rutaHistorial.get('/',(req, res)=>{
    let sql ='select historial.fecha, historial.hora, historial.descripcion from historial'        
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


/*
ruta.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select player.idPlayer, player.name, player.last, player.image, player.dorsal, positionPlayer.namePosition as position from player inner join positionPlayer on player.position=positionPlayer.idPosition where idPlayer = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
*/

//agregar historial
rutaHistorial.post('/',( req, res)=>{
    const{fecha, hora, descripcion} = req.body

    let sql = `insert into historial(fecha, hora, descripcion) values('${fecha}', '${hora}','${descripcion}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'historial agregado'})
        }
    })
})




module.exports = rutaHistorial;  