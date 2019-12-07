const carr_matControllers = require('../controllers').carr_mats;

module.exports = (app)=>{
    app.get('/api/pen',carr_matControllers.get);
    app.post('/api/pen',carr_matControllers.post);
    app.put('/api/pen/:id',carr_matControllers.put);
}
