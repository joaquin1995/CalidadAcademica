const nJwt = require('njwt');
const config = require('../config/config');
const secret = config.token_secret;

function auth(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({mesagge:'la peticion no tiene cabecera de autenticacion.'});   
    }

    let token = req.headers.authorization.replace(/['"]+/,'');
    let payload = nJwt.verify(token,secret,(err,verifiedJwt)=>{
        if(err){
            return res.status(401).send({mesagge:'Acceso no autorizado.'});   
          }else{
              next();
          }
    })

}

module.exports={
    auth
}