const carreras = require('../models').carreras;
const actividades = require('../models').actividades;
const facultades = require('../models').facultades;
const Sequelize = require('sequelize');
const op = Sequelize.Op;
console.log(carreras);

const get = (req, res) => {
    carreras.findAll({
            order: [
                ['carrera', 'asc']
            ]
        })
        .then(carrera => {
            res.status(200).send({
                carrera
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las carreras:',
                err
            });
        });

};


const getReport = (req, res) => {
    carreras.findAll({
            attributes: [
                [Sequelize.fn('count', Sequelize.col('*')), 'Total'],
                [Sequelize.col('carrera'), 'nom']
            ],
            where: {
                [op.and]: [
                    Sequelize.literal(`CAST(fecha  AS VARCHAR) LIKE '${req.query.fecha}' and CAST(idtipoac AS VARCHAR) like '${req.query.tipo}'`)
                ]
            },
            include: [{
                model: actividades,
                attributes: [],
                required: true
            }],
            group: ['carreras.id', 'nom'],
            order: [
                [Sequelize.col('Total'), 'desc']
            ],
            raw: true,
            limit: req.query.limit,
            subQuery: false
        })
        .then(carrera => {
            res.status(200).send({
                carrera
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las carreras:',
                err
            });
        });

};

// const getReportFac = (req, res) => {
//     carreras.findAll({
//             attributes: [],
//             include: [{

//                     attributes: [],
//                     model: actividades,
//                     required: true

//                 },
//                 {
//                     attributes: [
//                         [Sequelize.fn('count', Sequelize.col('*')), 'Total'],
//                         [Sequelize.col('descripcion'), 'facultad']
//                     ],
//                     model: facultades,
//                     required: true
//                 }
//             ],
//             group: ['facultade.id', 'facultade.descripcion','carreras.id'],
//         })
//         .then(carrera => {
//             res.status(200).send({
//                 carrera
//             })
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: 'error al buscar las carreras:',
//                 err
//             });
//         })
// }

const post = (req, res) => {
    carreras.create(req.body)
        .then(carrera => {
            res.status(200).send({
                carrera
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un carrera'
            });

        });
};

const put = (req, res) => {
    carreras.findByPk(req.params.id)
        .then(carrera => {
            carrera.update(req.body)
                .then(() => {
                    res.status(200).send({
                        carrera
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
    getReport,
    // getReportFac
};