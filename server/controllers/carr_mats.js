const carr_mats = require('../models').carr_mats;
console.log(carr_mats);

const get = (req, res) => {
    carr_mats.findAll()
        .then(pen => {
            res.status(200).send({
                pen
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las carr_mats:',err
            });
        });

};

const post = (req, res) => {
    carr_mats.create(req.body)
        .then(pen => {
            res.status(200).send({
                pen
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un pen'
            });

        });
};

const put = (req,res) => {
    carr_mats.findByPk(req.params.id)
        .then(pen => {
            pen.update(req.body)
                .then(() => {
                    res.status(200).send({
                        pen
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
