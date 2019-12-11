const personasControllers = require('../controllers').personas;



module.exports = (app)=>{
    app.get('/api/persona',personasControllers.get);
    app.post('/api/persona',personasControllers.post);
    app.put('/api/persona/:id',personasControllers.put);
    app.get('/api/persona-rol/:idrol',personasControllers.getPersonRol);
    app.post('/api/personalogin',personasControllers.getLogin);
    

}

