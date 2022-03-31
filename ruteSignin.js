const conexion = require('./config/conexion')
const ruteSignin = require('express').Router()
const jwt = require('jsonwebtoken');


/*
ruteSignin.get('/', (req,res)=>{
    conexion.query('select * from user', (err,rows,fields) => {
      if(!err){
        res.json(rows);
      }else{
        console.log(err);
      }
    })
  });*/

ruteSignin.get('/',(req, res)=>{
    let sql ='select * from user'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})



ruteSignin.post('/signin', (req,res) => {
    const { nameUser, password } = req.body;
    conexion.query('select nameUser from user where nameUser=? and password=?',
    [nameUser,password],
    (err,rows,fields) => {
      if(!err){
        if(rows.length >0){
          let data = JSON.stringify(rows[0]);
          const token = jwt.sign(data, 'stil');
          res.json({token});
        }else{
          res.json('Usuario o clave incorrectos');
        }
        
      }else{
        console.log(err);
      }
    }
    )
  })


ruteSignin.post('/test',verifyToken, (req,res) => {
  res.json('Informacion secreta');
})
  

function verifyToken(req,res, next){
    if(!req.headers.authorization) return res.status(401).json('No autorizado');
  
    const token = req.headers.authorization.substr(7);
    if(token!==''){
      const content = jwt.verify(token,'stil');
      req.data = content;
      next();
    }else{
      res.status(401).json('Token vacio');
    }
  
  }


  module.exports = ruteSignin;