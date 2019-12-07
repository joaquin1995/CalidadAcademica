const fotografiasControlles = require('../controllers').fotografias;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({uploadDir:'./server/uploads/fotografias'});

module.exports = (app)=>{
    app.post('/api/fotografias',md_auth.auth,fotografiasControlles.create);
    app.put('/api/fotografias/:id',md_auth.auth,fotografiasControlles.update);
    app.post('/api/upload-fotografia/:id',[md_auth.auth,md_upload],fotografiasControlles.uploadFotografia);
    app.get('/api/get-fotografia/:fotografia/:thumb',fotografiasControlles.getFotografia);
    app.get('/api/fotografias',fotografiasControlles.getAll);
    app.get('/api/fotografias-admin',md_auth.auth,fotografiasControlles.getAllAdmin);


}
