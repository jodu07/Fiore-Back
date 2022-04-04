const conexion = require('./config/conexion')
const ruta = require('express').Router()



/*

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

*/


// get for position
/*
ruta.get('/:position',(req, res)=>{
    const {position} = req.params
    let sql ='select * from player where position = ?'
    conexion.query(sql,[position],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
*/
/*
// get for name
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
*/


ruta.get('/',(req, res)=>{
    let sql ='select player.idPlayer, player.name, player.last, player.image, player.dorsal, positionPlayer.namePosition as position from player inner join positionPlayer on player.position=positionPlayer.idPosition'        
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})



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

//agregar equipo
ruta.post('/',( req, res)=>{
    const{name, last, image, dorsal, position} = req.body

    let sql = `insert into player(name, last, image, dorsal, position) values('${name}','${last}','${image}','${dorsal}','${position}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'jugador agregado'})
        }
    })
})




module.exports = ruta  