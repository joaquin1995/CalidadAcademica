const facultades = require('../models').facultades;
const carreras = require('../models').carreras;
const actividades = require('../models').actividades;
const Sequelize = require('sequelize');
const op = Sequelize.Op;



console.log(facultades);

const get = (req, res) => {
    facultades.findAll()
        .then(facultad => {
            res.status(200).send({
                facultad
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las facultades:',
                err
            });
        });

};


const getReportFac = (req, res) => {
    facultades.findAll({
            attributes: [
                [Sequelize.fn('count', Sequelize.col('*')), 'Total'],
                [Sequelize.col('facultades.descripcion'), 'nom']
            ],
            where: {
                [op.and]: [
                    Sequelize.literal(`CAST(fecha  AS VARCHAR) LIKE '${req.query.fecha}'`)
                ]
            },
            include: [{
                attributes: [],
                model: carreras,
                required: true,
                include: [{
                    attributes: [],
                    model: actividades,
                    required: true
                }]
            }],
            order: [
                [Sequelize.col('Total'), 'desc']
            ],
            group: ['facultades.id', 'nom'],
            raw: true,
            limit: req.query.limit,
            subQuery: false
        })
        .then(facultad => {
            res.status(200).send({
                facultad
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las facultades:',
                err
            });
        });

};


const post = (req, res) => {
    facultades.create(req.body)
        .then(facultad => {
            res.status(200).send({
                facultad
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un facultad'
            });

        });
};

const put = (req, res) => {
    facultades.findByPk(req.params.id)
        .then(facultad => {
            facultad.update(req.body)
                .then(() => {
                    res.status(200).send({
                        facultad
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
    put,
    getReportFac
};