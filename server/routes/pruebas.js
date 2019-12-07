const pruebasControlles = require('../controllers').pruebas;


module.exports = (app)=>{
    app.post('/api/prueba',pruebasControlles.create);
    app.get('/api/prueba',pruebasControlles.getAll);
    app.get('/api/pruebaGet',pruebasControlles.get);

}