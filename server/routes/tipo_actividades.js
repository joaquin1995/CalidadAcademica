const tipoControllers = require('../controllers').tipo_actividades;



module.exports = (app)=>{
    app.get('/api/tipo',tipoControllers.get);
    app.post('/api/tipo',tipoControllers.post);
    app.put('/api/tipo/:id',tipoControllers.put);
}
