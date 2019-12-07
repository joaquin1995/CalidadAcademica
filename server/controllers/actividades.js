const actividades = require('../models').actividades;
const carreras = require('../models').carreras;
const tipo_actividades = require('../models').tipo_actividades;
const personas = require('../models').personas;
const materias = require('../models').materias;
const Sequelize = require('sequelize');
const op = Sequelize.Op;

console.log(actividades);

const get = (req, res) => {
    actividades.findAll()
        .then(actividad => {
            res.status(200).send({
                actividad
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las actividades:',
                err
            });
        });

};

const post = (req, res) => {
    actividades.create(req.body)
        .then(actividad => {
            res.status(200).send({
                actividad
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un actividad',
                err
            });

        });
};

const put = (req, res) => {
    actividades.findByPk(req.params.id)
        .then(actividad => {
            actividad.update(req.body)
                .then(() => {
                    res.status(200).send({
                        actividad
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


const getReport = (req, res) => {
    actividades.findAll({
            include: [{
                model: carreras,
                required: true
            }, {
                model: tipo_actividades,
                required: true
            }, {
                model: materias,
                required: true
            }, {
                model: personas,
                required: true
            }],
            where: {
                [op.and]: [
                    Sequelize.literal(`CAST(modulo AS CHAR) like '${req.query.mod}' and CAST(semestre AS CHAR) like '${req.query.sem}' 
                    and CAST(idtipoac AS VARCHAR) like '${req.query.ac}' and CAST(fecha  AS VARCHAR) LIKE '${req.query.fecha}' 
                    and CAST(idcarrera AS VARCHAR) like '${req.query.idcar}' and actividades.estado like '${req.query.estado}' `)
                ]
            }
        })
        .then(actividad => {
            res.status(200).send({
                actividad
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las actividades:',
                err
            });
        });

};



module.exports = {
    get,
    post,
    put,
    getReport
};