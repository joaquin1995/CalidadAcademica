const cuentasControllers = require('../controllers').cuentas;



module.exports = (app)=>{
    app.get('/api/cuenta',cuentasControllers.get);
    app.post('/api/cuenta',cuentasControllers.post);
    app.put('/api/cuenta/:id',cuentasControllers.put);
}

