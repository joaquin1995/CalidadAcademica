const http = require('http');
const app = require('../app');


const port = Number(process.env.prot,10) || 8010;
app.set('port',port);

const server = http.createServer(app);
server.listen(port);