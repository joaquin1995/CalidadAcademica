const rolesControllers = require('../controllers').roles;



module.exports = (app)=>{
    app.get('/api/rol',rolesControllers.get);
    app.post('/api/rol',rolesControllers.post);
    app.put('/api/rol',rolesControllers.put);
}

