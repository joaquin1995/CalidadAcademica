const archivosControllers = require('../controllers').archivos;
const cm = require('connect-multiparty');
const md_upload = cm({uploadDir: './server/uploads/fotografias'});


module.exports = (app)=>{
    app.get('/api/archivo',archivosControllers.get);
    app.post('/api/archivo',archivosControllers.post);
    app.put('/api/archivo/:id',archivosControllers.put);
    app.post('/api/archivo-act',md_upload,archivosControllers.postFile);
    app.get('/api/archivo-file/:file',md_upload,archivosControllers.getFile);
    app.get('/api/archivo/:id',archivosControllers.getId);



}
