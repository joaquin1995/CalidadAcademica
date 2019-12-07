const tipo_actividades = require('../models').tipo_actividades;
console.log(tipo_actividades);

const get = (req, res) => {
    tipo_actividades.findAll({
            order: [
                ['id', 'asc'],
            ]
        })
        .then(tipo => {
            res.status(200).send({
                tipo
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las tipo_actividades:',
                err
            });
        });

};

const post = (req, res) => {
    tipo_actividades.create(req.body)
        .then(tipo => {
            res.status(200).send({
                tipo
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un tipo'
            });

        });
};

const put = (req, res) => {
    tipo_actividades.findByPk(req.params.id)
        .then(tipo => {
            tipo.update(req.body)
                .then(() => {
                    res.status(200).send({
                        tipo
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