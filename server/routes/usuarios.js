const usuariosControlles = require('../controllers').usarios;
const md_auth = require('../authenticated/authenticated');



module.exports = (app)=>{
    app.post('/api/usuario',md_auth.auth,usuariosControlles.create);
    app.post('/api/login',usuariosControlles.login);
    app.get('/api/usuarios',md_auth.auth,usuariosControlles.getAll);
}

