const carrerasControllers = require('../controllers').carreras;



module.exports = (app)=>{
    app.get('/api/carrera',carrerasControllers.get);
    app.post('/api/carrera',carrerasControllers.post);
    app.put('/api/carrera/:id',carrerasControllers.put);
    app.get('/api/carrera-report',carrerasControllers.getReport);
    // app.get('/api/carrera-reportfac',carrerasControllers.getReportFac);

}
