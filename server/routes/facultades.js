const facultadesControllers = require('../controllers').facultades;



module.exports = (app)=>{
    app.get('/api/facultad',facultadesControllers.get);
    app.post('/api/facultad',facultadesControllers.post);
    app.put('/api/facultad/:id',facultadesControllers.put);
    app.get('/api/facultad-report',facultadesControllers.getReportFac);

}
