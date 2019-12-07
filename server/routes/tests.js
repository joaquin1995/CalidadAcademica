const testsControlles = require('../controllers').tests;


module.exports = (app)=>{
    app.post('/api/test',testsControlles.create);
    app.get('/api/test',testsControlles.getAll);

}