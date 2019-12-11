const nJwt = require('njwt');
const config = require('../config/config');
const secret = config.token_secret;

exports.createToken = (usuario) => {
    let params = {
        sub:usuario.id,
        usuario: usuario.nombres,
        apat:usuario.apat,
        idrol:usuario.idrol,
        limit: usuario.limitacion,
        email: usuario.email
    }

    let jwt = nJwt.create(params,secret);

    //para dar una fecha de expiracion al token

    let t = new Date();
    t.setHours(t.getHours()+2);
    jwt.setExpiration(t);

    let token = jwt.compact();

    return token;

}