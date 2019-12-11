const personas = require('../models').personas;
// const roles = require('../models').roles;
const cuentas = require('../models').cuentas;
const jwt = require('../services/jwt');

console.log(personas);

const get = (req, res) => {
    personas.findAll()
        .then(persona => {
            res.status(200).send({
                persona
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las personas:',
                err
            });
        });

};

const post = (req, res) => {
    personas.create(req.body)
        .then(persona => {
            res.status(200).send({
                persona
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un persona'
            });

        });
};

const put = (req, res) => {
    personas.findByPk(req.params.id)
        .then(persona => {
            persona.update(req.body)
                .then(() => {
                    res.status(200).send({
                        persona
                    });
                })
                .catch(err => {
                    res.status(500).send({
                        message: 'no se puedo actualizar'
                    });
                })
        })
        .catch(err => {
            res.status(500).send({
                message: 'no se pudo encontrar'
            });
        })
};


const getPersonRol = (req, res) => {
    personas.findAll({
            include: [{
                model: cuentas,
                require: true
            }],
            where: {
                idrol: req.params.idrol
            }
        })
        .then(persona => {
            res.status(200).send({
                persona
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las personas:',
                err
            });
        });

};


const getLogin = (req, res) => {
    personas.findOne({
            include: [{
                model: cuentas,
                require: true,
                where: {
                    usuario: req.body.usuario,
                    password: req.body.password
                }
            }],
        })
        .then(persona => {
            if (persona) {
                if (req.body.token) {
                    res.status(200).send({
                        token: jwt.createToken(persona)
                    });
                } else {
                    res.status(200).send({
                        persona: persona
                    });
                }

            } else {
                res.status(401).send({
                    message: 'Acceso No Autorizado'
                })
            }

        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las personas:',
                err
            });
        });
};


module.exports = {
    get,
    post,
    put,
    getPersonRol,
    getLogin
};