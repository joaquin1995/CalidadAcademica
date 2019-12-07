const pruebas = require('../models').pruebas;
const tests = require('../models').tests;
const usuarios = require('../models').usuarios;



function create(req,res){

    pruebas.create(req.body)
    .then(prueba => {
        res.status(200).send({prueba});
    })
    .catch(err => {
        res.status(500).send({messagge: 'no se pudo crear pruebas:',err});
    })
}


function getAll(req,res){
    pruebas.findAll()
    .then(prueba => {
        res.status(200).send({prueba});
    })
    .catch(err => {
        res.status(500).send({messagge:'Ocurrio un error al buscar al preubas.'});
    })
}

function get(req,res){
    pruebas.findAll({
        include: [{
            model: usuarios,
            required:true
          },
          {
            model: tests,
            required:true
          }
        ],
    
    })
    .then(prueba => {
        res.status(200).send({prueba});
    })
    .catch(err => {
        res.status(500).send({messagge:'Ocurrio un error al buscar al preubas.'});
    })
}


module.exports = {
    create,
    getAll,
    get
}