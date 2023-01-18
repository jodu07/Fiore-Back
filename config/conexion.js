const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port:3306,
    database: 'fiorentina_db',
    

});

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error: '+err)
    }
    else{
        console.log('la base de datos se conectó!!!')
    } 
}); 
  


module.exports= conexion;