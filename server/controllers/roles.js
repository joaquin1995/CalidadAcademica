const roles = require('../models').roles;
console.log(roles);

const get = (req, res) => {
    roles.findAll()
        .then(rol => {
            res.status(200).send({
                rol
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las roles:',err
            });
        });

};

const post = (req, res) => {
    roles.create(req.body)
        .then(rol => {
            res.status(200).send({
                rol
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un rol'
            });

        });
};

const put = (req,res) => {
    roles.findByPk(req.params.id)
        .then(rol => {
            rol.update(req.body)
                .then(() => {
                    res.status(200).send({
                        rol
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
