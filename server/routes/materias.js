const materiasControllers = require('../controllers').materias;



module.exports = (app)=>{
    app.get('/api/materia',materiasControllers.get);
    app.post('/api/materia',materiasControllers.post);
    app.put('/api/materia/:id',materiasControllers.put);
}
