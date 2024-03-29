require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

const cors = require('cors');
const bodyParser = require('body-parser');

// express
const app = express();

//admitir
app.use(express.json());

//config
app.set('port', port);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());



// rutas
app.use('/api',require('./ruta.js'));
app.use('/signin',require('./ruteSignin.js'));
app.use('/historial',require('./rutaHistorial.js'));




//inicializar express
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('error al iniciar el servidor: '+error)
    }    
    else{
        console.log('servidor iniciado en el puerto: '+port)
    }
})



