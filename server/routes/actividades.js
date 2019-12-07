const actividadControllers = require('../controllers').actividades;



module.exports = (app)=>{
    app.get('/api/actividad',actividadControllers.get);
    app.post('/api/actividad',actividadControllers.post);
    app.put('/api/actividad/:id',actividadControllers.put);
    app.get('/api/actividad-reporte',actividadControllers.getReport);

}
