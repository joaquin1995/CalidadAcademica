const cuentas = require('../models').cuentas;
console.log(cuentas);

const get = (req, res) => {
    cuentas.findAll()
        .then(cuenta => {
            res.status(200).send({
                cuenta
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las cuentas:',err
            });
        });

};

const post = (req, res) => {
    cuentas.create(req.body)
        .then(cuenta => {
            res.status(200).send({
                cuenta
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un cuenta'
            });

        });
};

const put = (req,res) => {
    cuentas.findByPk(req.params.id)
        .then(cuenta => {
            cuenta.update(req.body)
                .then(() => {
                    res.status(200).send({
                        cuenta
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



module.exports = {
    get,
    post,
    put
};
