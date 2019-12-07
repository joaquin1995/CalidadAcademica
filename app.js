const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Rutas
// require('./server/routes/usuarios')(app);
// require('./server/routes/fotografias')(app);
// require('./server/routes/pruebas')(app);
// require('./server/routes/tests')(app);
   require('./server/routes/cuentas')(app);
   require('./server/routes/personas')(app);
   require('./server/routes/roles')(app);
   require('./server/routes/carreras')(app);
   require('./server/routes/facultades')(app);
   require('./server/routes/materias')(app);
   require('./server/routes/actividades')(app);
   require('./server/routes/tipo_actividades')(app);
   require('./server/routes/archivos')(app);
   require('./server/routes/carr_mats')(app);




app.get('*',(req,res)=>{
    res.status(200).send({messagge:'Bienvenidos al servidor de nodejs'});
})


module.exports = app;