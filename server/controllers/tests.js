const tests = require('../models').tests;



function create(req,res){

    tests.create(req.body)
    .then(test => {
        res.status(200).send({test});
    })
    .catch(err => {
        res.status(500).send({messagge: 'no se pudo crear tests:',err});
    })
}



function getAll(req,res){
    tests.findAll()
    .then(test => {
        res.status(200).send({test});
    })
    .catch(err => {
        res.status(500).send({messagge:'Ocurrio un error al buscar al tests.'});
    })


}


module.exports = {
    create,
    getAll
}