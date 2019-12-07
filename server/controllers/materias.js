const materias = require('../models').materias;
console.log(materias);

const get = (req, res) => {
    materias.findAll({
        order: [
            ['id', 'asc']
        ]
    })
        .then(materia => {
            res.status(200).send({
                materia
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las materias:',err
            });
        });

};

const post = (req, res) => {
    materias.create(req.body)
        .then(materia => {
            res.status(200).send({
                materia
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un materia'
            });

        });
};

const put = (req,res) => {
    materias.findByPk(req.params.id)
        .then(materia => {
            materia.update(req.body)
                .then(() => {
                    res.status(200).send({
                        materia
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
